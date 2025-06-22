export default function AboutUsCheckBox({title}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="size-4 2xs:size-6 flex-center rounded-sm bg-primary">
        <svg className="size-2 2xs:size-3.5 text-white" strokeWidth={4}>
          <use href="#check"></use>
        </svg>
      </div>
      <p className="font-MorabbaBold text-xs 3xs:text-sm 2xs:text-lg text-dark-primary">
        {title}
      </p>
    </div>
  );
}
