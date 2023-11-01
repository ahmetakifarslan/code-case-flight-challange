interface DatePickerProps {
  label: string;
  icon?: React.ReactNode;
}

export default function DatePicker({ icon, label }: DatePickerProps) {
  return (
    <div className="flex items-center border-2 bg-blue-950 h-full w-full p-2">
      <span>{icon}</span>
      <span className="text-white">{label}</span>
    </div>
  );
}
