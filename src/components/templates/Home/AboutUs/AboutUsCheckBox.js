export default function AboutUsCheckBox({title}) {
  return (
    <div className="flex gap-3">
      <div className="size-6 flex-center rounded-sm bg-primary">
        <svg className="size-3.5 text-white" strokeWidth={4}>
          <use href="#check"></use>
        </svg>
      </div>
      <p className="font-MorabbaBold text-lg text-dark-primary">
        {title}
      </p>
    </div>
  );
}
