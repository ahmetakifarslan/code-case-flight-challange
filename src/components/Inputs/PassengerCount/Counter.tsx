interface Props {
  count: number;
  increaseFn: () => void;
  decreaseFn: () => void;
}
export default function Counter({ count, increaseFn, decreaseFn }) {
  return (
    <div className="flex justify-between items-center ">
      <p className="text-md">Yolcu</p>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-gray-500 bg-opacity-30 h-8 w-8 rounded"
          onClick={decreaseFn}
        >
          -
        </button>
        <p className="w-8 text-center">{count}</p>
        <button
          type="button"
          className="bg-gray-500 bg-opacity-30 h-8 w-8 rounded"
          onClick={increaseFn}
        >
          +
        </button>
      </div>
    </div>
  );
}
