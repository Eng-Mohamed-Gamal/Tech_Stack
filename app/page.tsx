import { ChartBarInteractive } from "@/components/chatrs/BarChart-Interactive";
import { ChartAreaInteractive } from "@/components/chatrs/ChartAreaInteractive";
import { ChartBarLabelCustom } from "@/components/chatrs/ChartBarLabelCustom";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
      <div className="col-span-3">
        <ChartAreaInteractive />
      </div>
      <div className="col-span-3 xl:col-span-2">
        <ChartBarInteractive />
      </div>
      <div className="col-span-3 xl:col-span-1">
        <ChartBarLabelCustom />
      </div>
    </div>
  );
}


