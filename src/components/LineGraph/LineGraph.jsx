import {useState} from 'react';
import {LineGraphSVG} from './LineGraphSVG';
import styles from './LineGraph.module.sass';


export function LineGraph({pointsAmount, maxX, maxY, scaleSize, className}) {
  const getRandomPoint = (base) => Math.round((base / 100) * Math.random() * 100);

  const getRandomPoints = (pointsAmount) => new Array(pointsAmount)
    .fill(0)
    .map(() => [getRandomPoint(maxX), getRandomPoint(maxY)])
    .sort((a, b) => a[0] - b[0]);

  const getRandomAmountPoints = () => Math.round(Math.random() * pointsAmount) || 1;

  const initPoints = getRandomPoints(pointsAmount);
  const [points, setPoints] = useState({from: initPoints, to: initPoints, pointsTo: initPoints});

  const handleSVGClick = () => {
    const pointsTo = getRandomPoints(getRandomAmountPoints());
    const copyPointsTo = pointsTo.slice();
    const maxX = points.to[pointsTo.length - 1][0];
    const normalizedPointsTo = points.to.map((item, i) => {
      const pointTo = pointsTo[0].slice();

      const isLastPointTo = pointsTo[0][0] <= item[0] || i === 0 || pointsTo[0][0] > maxX;
      if (pointsTo.length > 1 && isLastPointTo) {
        pointsTo.shift();
      }
      return pointTo;
    });

    setPoints({
      from: points.to,
      to: normalizedPointsTo,
      pointsTo: copyPointsTo,
    });
  };

  return (
    <div className={`${styles.lineGraph} ${className}`}>
      <pre className={styles.coordinates}>
        {points.pointsTo.map((item) => `[${item.toString()}]\n`)}
      </pre>
      <div className={styles.svg} onClick={handleSVGClick}>
        <LineGraphSVG
          from={points.from}
          to={points.to}
          maxX={maxX}
          maxY={maxY}
          scaleSize={scaleSize}
        />
      </div>
    </div>
  );
}