export const PlanetMode = ({ modes, setSelectedMode, selectedMode }) => {
  const getIndex = (index) => {
    return `0${index + 1}`;
  };
  const handleClick = (mode) => {
    setSelectedMode(mode);
  };
  const getSelectedMode = (mode) => {
    return selectedMode === mode ? 'mode__section-content--active' : '';
  };

  return (
    <div className="mode">
      <div className="mode__section">
        {modes.map((mode, index) => {
          return (
            <div
              className={`mode__section-content ${getSelectedMode(mode)}`}
              onClick={() => handleClick(mode)}
              key={index}
            >
              <span className="mode__section-index">{getIndex(index)}</span>
              <h5 className="mode__section-title">{mode}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
