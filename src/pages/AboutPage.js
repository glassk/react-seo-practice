import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>정보 페이지</title>
        <meta name="description" content="정보 페이지에 대한 설명" />
        <meta property="og:title" content="정보 페이지" />
        <meta property="og:description" content="정보 페이지입니다." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://github.com/" />
        <meta
          property="og:image"
          content="https://github.com/glassk/react-seo-practice/assets/63575891/58061547-1df2-4512-afc7-b1fb19248a6d"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@github" />
        <meta name="twitter:title" content="정보 페이지" />
        <meta name="twitter:description" content="정보 페이지입니다." />
        <meta
          name="twitter:image"
          content="https://github.com/glassk/react-seo-practice/assets/63575891/58061547-1df2-4512-afc7-b1fb19248a6d"
        />
      </Helmet>
      <h1>정보 페이지</h1>
      <p>정보 페이지입니다.</p>
      <Link to="/">홈 페이지로 이동</Link>
    </div>
  );
}

export default AboutPage;
