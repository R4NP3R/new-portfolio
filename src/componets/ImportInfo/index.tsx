interface ImportInfoParams {
  type: string,
  importName: string,
  path: string
}

export const ImportInfo = ({type, importName, path}:ImportInfoParams) => {
  return (
    <p className="text-2xl">
      <span className="text-[#FF6E9D]">{type}</span>
      <span className="text-[#F8F8F2]">
        {" {"} {importName} {"} "}
      </span>
      <span className="text-[#FF6E9D]">from</span>
      <span className="text-[#E9F270]"> "{path}"</span>
      <span className="text-[#F8F8F2]">;</span>
    </p>
  );
};
