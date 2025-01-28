import Title from 'antd/es/typography/Title';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="p-10">
      <Title level={3}>
        Welcome to the Consistency Journal, a vibrant digital journal created by
        young professionals from various sectors who are passionate about
        sharing the latest news in economic high-tech developments.
      </Title>
      <Title level={4}>
        Our mission is to connect readers with insightful articles, cutting-edge
        innovations, and trends that impact the economy and technology
        landscape.
      </Title>
      <Title level={4}>
        We strive to foster a collaborative community where knowledge is shared,
        ideas are exchanged, and the voices of the next generation are heard.
      </Title>
      <Title level={4}>
        Join us on this exciting journey as we explore the dynamic intersection
        of technology and economics, keeping you informed and inspired.
      </Title>
    </div>
  );
}
