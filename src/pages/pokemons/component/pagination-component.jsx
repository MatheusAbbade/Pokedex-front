export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
      <div>
        <div style={{paddingRight: 50}}>
        {gotoPrevPage && <button onClick={gotoPrevPage}>Anterior</button>}
        </div>
        {gotoNextPage && <button onClick={gotoNextPage}>Próximo</button>}
      </div>
    );
  }