import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>홈 페이지</title>
        <meta name="description" content="홈 페이지 설명" />
        <meta property="og:title" content="홈 페이지" />
        <meta property="og:description" content="홈 페이지입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/" />
        <meta
          property="og:image"
          content="https://github.com/glassk/react-seo-practice/assets/63575891/3cf7dc61-422c-4f51-84ff-19e25a93897a"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@github" />
        <meta name="twitter:title" content="홈 페이지" />
        <meta name="twitter:description" content="홈 페이지입니다." />
        <meta
          name="twitter:image"
          content="https://github.com/glassk/react-seo-practice/assets/63575891/3cf7dc61-422c-4f51-84ff-19e25a93897a"
        />
      </Helmet>
      <h1>홈 페이지</h1>
      <p>홈 페이지입니다.</p>
      <Link to="/about">정보 페이지로 이동</Link>
    </div>
  );
}

export default HomePage;
