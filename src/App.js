import IG from './ItemGrid'
import styled from 'styled-components';
import ItemKind from './ItemKind';

function App() {
  return (
    <div className="App">
      <h1>젤다 UI 만들기</h1>
      <h3>아이템 창</h3>
      <ItemKind></ItemKind>
      <ItemWindow>
        <IG></IG>
      </ItemWindow>
    </div>
  );
}

export default App;

const ItemWindow = styled.div`
  background-color:darkseagreen;
  width: 45rem;
  padding:1rem;
`;