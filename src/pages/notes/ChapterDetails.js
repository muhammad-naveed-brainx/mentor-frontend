import React, { useState, useEffect } from 'react';

const ChapterDetails = ({ chapterData }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const fetchChapterData = async () => {
      try {
        // Fetch heading data
        const responseHeading = await fetch(`http://13.234.75.161/api/headings?chapterId=${chapterId}`);
        if (!responseHeading.ok) {
          console.error('Error fetching heading data:', responseHeading.statusText);
          return;
        }
        const dataHeading = await responseHeading.json();
  
        const responseSubHeadings = await fetch(`http://13.234.75.161/api/sub-headings?headingId=${dataHeading.data[0].id}`);
        if (!responseSubHeadings.ok) {
          console.error('Error fetching subheading data:', responseSubHeadings.statusText);
          return;
        }
        const dataSubHeadings = await responseSubHeadings.json();
    
        setChapterData({
          id: chapterId,
          name: dataHeading.data[0].name,
          headings: [dataHeading.data[0].name],
          subheadings: dataSubHeadings.data.map(subheading => subheading.name),
          texts: dataSubHeadings.data.map(subheading => subheading.explanation),
          images: dataSubHeadings.data.map(subheading => subheading.image_url),
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
=======
    const fetchImages = async () => {
      const getUnsplashImage = async () => {
        try {
          const response = await fetch('https://source.unsplash.com/150x150/?nature');
          if (response.ok) {
            return response.url;
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
        return 'https://via.placeholder.com/150';
      };

      const newImageUrls = await Promise.all(
        chapterData.images.map(async (_, index) => await getUnsplashImage())
      );

      setImageUrls(newImageUrls);
>>>>>>> parent of 89a10e5 (API configured for existing functionalities)
    };

    fetchImages();
  }, [chapterData.images]);

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', color: 'black' }}>
      <h2>{chapterData.name}</h2>
      <div>
        <h3>Headings</h3>
        <ul>
          {chapterData.headings.map((heading, index) => (
            <li key={index}>{heading}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Subheadings</h3>
        <ul>
          {chapterData.subheadings.map((subheading, index) => (
            <li key={index}>{subheading}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Texts</h3>
        <ul>
          {chapterData.texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Images</h3>
        <ul>
          {imageUrls.map((imageUrl, index) => (
            <li key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '10px' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterDetails;
