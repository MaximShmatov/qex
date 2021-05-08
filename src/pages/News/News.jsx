import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFromKeywords} from '../../api/news';
import {setNewsList} from '../../redux/newsSlice';
import {setMessage} from '../../redux/snackbarSlice';
import SearchForm from '../../components/SearchForm/SearchForm';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import styles from './News.module.sass';


export default function News() {
  const dispatch = useDispatch();
  const news = useSelector(({news}) => news.newsList)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const keyword = event.target.elements.search.value;
    if (keyword !== '') {
      fetchFromKeywords(keyword)
        .then((data) => {
          if (data.status === 'ok') {
            dispatch(setNewsList(data.articles));
          } else {
            dispatch(setMessage(`${data.status}: limit reached...`));
          }
        })
        .catch((error) => dispatch(setMessage(error.toString())));
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          News
        </h1>
        <SearchForm onSubmit={handleFormSubmit}/>
      </div>
      {news.map((item) => (
        <div key={Math.random()}>
          <hr className={styles.separator}/>
          <NewsBlock news={item}/>
        </div>)
      )}
    </main>
  );
}