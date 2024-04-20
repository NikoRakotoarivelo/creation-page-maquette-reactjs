function TableHeader() {
  return (
    <div>
      <div className="table-header">
        <tr>
          <th>
            <div className="table-header-artisans-div">
              <span className="table-header-artisans">Artisans</span>
            </div>
          </th>
          <th>
            <span className="table-header-ville">Ville</span>
          </th>
          <th>
            <span className="table-header-total-participation">
              Total de participant
            </span>
          </th>
        </tr>
      </div>
      <div className="content-style-global">
        <div className="content-style-left"></div>
        <div className="content-style-right"></div>
        <span className="content-style-lines">
          --------------------------------------
        </span>
      </div>
    </div>
  );
}
export default TableHeader;
