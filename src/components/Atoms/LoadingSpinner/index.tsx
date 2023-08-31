export function ComponentLoadingSpinner() {
  return (
    <div className="flex">
      <div className="relative">
        {/* <!-- Outer Ring--> */}
        <div
          className="w-12 h-12 rounded-full absolute
                        border-4 border-dashed border-gray-200"
        />
      </div>
      {/* <!-- Inner Ring --> */}
      <div
        className="w-12 h-12 rounded-full animate-spin absolute
                        border-4 border-dashed border-primaryFixxer-one border-t-transparent"
      />
    </div>
  );
}
