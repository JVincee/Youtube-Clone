import { useState } from 'react';
import './Tag.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Tag() {
  const tagsList = ['All', 'Gaming', 'Mixes', 'Music', 'Live', 'Valorant', 'Lethal Company', 'Anime', 'Mobile games', 'Laptops', 'Smartphones', 'Pop Music', 'Minecraft', 'Mobile Legends', 'Dota2', 'MMO games', 'Watched', 'Recently uploaded', 'New to you'];
  const tagsPerPage = 10;

  const [activeTag, setActiveTag] = useState('All');
  const [startIndex, setStartIndex] = useState(0);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + tagsPerPage);
  };

  const handleBeforeClick = () => {
    setStartIndex(Math.max(0, startIndex - tagsPerPage));
  };

  const visibleTags = tagsList.slice(startIndex, startIndex + tagsPerPage);

  return (
    <div className="tags">
      {tagsList.length > tagsPerPage && startIndex > 0 && (
        <NavigateBeforeIcon className='before' onClick={handleBeforeClick} />
      )}
      {visibleTags.map((tag) => (
        <div
          key={tag}
          className={`miniTag ${activeTag === tag ? 'active' : ''}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
      {tagsList.length > startIndex + tagsPerPage && (
        <NavigateNextIcon className='next' onClick={handleNextClick} />
      )}
    </div>
  );
}

export default Tag;