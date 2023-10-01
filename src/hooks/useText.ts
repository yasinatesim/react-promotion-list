const useText = () => {
  const handleColor = (text: string): string => {
    const colorRegex = /color:\s*#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;

    const colorMatch = text.match(colorRegex);

    if (colorMatch && colorMatch[0]) {
      const colorCode = colorMatch[0].replace(/\s/g, '');

      if (colorCode === 'color:#fff' || colorCode === 'color:#ffffff') {
        return text.replace(colorRegex, 'color: #000');
      }
    }

    return text;
  };

  const handleFullFilledTitle = (title: string): string => {
    const regex = />-|\.</g;
    const found = title.match(regex);

    if (found) {
      return '';
    }

    return handleColor(title);
  };

  return {
    handleFullFilledTitle,
  };
};

export default useText;
