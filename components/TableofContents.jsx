"use client"
import React, { useState, useEffect } from 'react';


const TableOfContents = ({ content }) => {
  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    const generateTableOfContents = (content) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const toc = Array.from(headings).map((heading) => {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        heading.id = id;
        return {
          level: parseInt(heading.tagName.substring(1), 10),
          text: heading.textContent,
          id: id,
        };
      });
      setTableOfContents(toc);
    };

    generateTableOfContents(content);
  }, [content]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick = (id) => (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    scrollToHeading(id);
  };

  return (
    <div className="max-w-3xl mx-auto">
    <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
    <ul className="list-disc pl-6 bg-slate-100">
      {tableOfContents.map((item, index) => (
        <li key={index} style={{ listStyleType: 'none' }}>
          {/* Use onClick event handler to call handleClick */}
          <a href={`#${item.id}`} onClick={handleClick(item.id)} className="font-semibold">{item.text}</a>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default TableOfContents;
