import React from "react";

export const useFetch = (url) => {
  const [state, setState] = React.useState(null)

  React.useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => setState(data))

  }, [url])

  if (state !== "") {
    return [state]
  }
};
