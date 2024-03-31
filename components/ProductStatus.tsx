import { DonutChart } from "@mantine/charts";
import { donutGraphData } from "@/lib/data";

export default function ProductStatus() {
  return (
    <section
      className="basis-[30%] border p-5 bg-white rounded-md shadow mb-5"
    >
      <h4 className="text-[#818891] text-md font-medium">Product Status</h4>
      <section className="mt-4">
        <DonutChart
         h={220}
         size={160}
         thickness={30}
         paddingAngle={5}
         withLabelsLine
         withLabels
         withTooltip={false}
         data={donutGraphData}
        />
      </section>
      <section className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-1 p-[3px] rounded">
          <div className="w-[10px] h-[10px] rounded-full bg-[#24CCB8]"/>
          <span className="text-xs text-[#818891]">Delivered</span>
        </div>
        <div className="flex flex-row items-center gap-1 p-[3px] rounded">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF9500]"/>
          <span className="text-xs text-[#818891]">Pending</span>
        </div>
        <div className="flex flex-row items-center gap-1 p-[3px] rounded">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF5967]"/>
          <span className="text-xs text-[#818891]">Canceled</span>
        </div>
      </section>
    </section>
  );
}
