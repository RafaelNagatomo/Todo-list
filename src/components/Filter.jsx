const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Estado:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordenação:</p>
                <button onClick={() => setSort("Asc")}>(A-Z)</button>
                <button onClick={() => setSort("Desc")}>(Z-A)</button>
            </div>
        </div>
    </div>
  )
}

export default Filter