import {useState} from 'react';
import {LineGraphSVG} from './LineGraphSVG';
import styles from './LineGraph.module.sass';


export function LineGraph({pointsAmount, maxX, maxY, scaleSize, className}) {
  const arrayPoints = new Array(pointsAmount).fill(0);
  const getRandomPoint = (base) => Math.round((base / 100) * Math.random() * 100);

  const getRandomPoints = () => arrayPoints
    .map(() => [getRandomPoint(maxX), getRandomPoint(maxY)])
    .sort((a, b) => a[0] - b[0]);

  const [points, setPoints] = useState({from: getRandomPoints(), to: getRandomPoints()});


  const handleSVGClick = () => {
    setPoints({
      from: points.to,
      to: getRandomPoints(),
    });
  };

  return (
    <div className={`${styles.lineGraph} ${className}`} onClick={handleSVGClick}>
      <pre className={styles.coordinates}>
        {points.to.map((item) => `[${item.toString()}]\n`)}
      </pre>
      <div className={styles.svg}>
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