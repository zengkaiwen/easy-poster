import { useEffect, useState } from 'react';
import styled from 'styled-components';
import easyPoster, { defineSchema } from '@easy-poster';

const Wrapper = styled.div``;

function App() {
  useEffect(() => {
    console.log(easyPoster);
    console.log(defineSchema);
  }, []);

  return (
    <Wrapper>
      <h1>Easy Poster</h1>
    </Wrapper>
  );
}

export default App;
