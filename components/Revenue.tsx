import { LineChart } from "@mantine/charts"
import { Select } from "@mantine/core"

import { data } from "@/lib/data"




export default function Revenue() {
  return (
    <section className="basis-[70%] bg-white
    rounded-md shadow pb-3">
      <section className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center">
         <h1 className="text-[#818891] text-xl mr-5 lg:mr-10">Revenue</h1>
         <div className="flex flex-row items-center border gap-1 p-[1px] lg:p-[3px] rounded mr-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#24CCB8]"/>
          <span className="text-xs text-[#818891]">This Year</span>
         </div>
         <div className="flex flex-row items-center border gap-1 p-[3px] rounded">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF9500]"/>
          <span className="text-xs text-[#818891]">Last Year</span>
         </div>
        </div>
        <Select
          placeholder="Year"
          data={["This Year", "Last Year"]}
        />
      </section>

      <section className="w-full pr-3 mt-10">
        <LineChart
          h={300}
          data={data}
          dataKey="date"
          withLegend={false}
          withTooltip={false}
          series={[
            { name: 'Apples', color: 'indigo.6' },
            { name: 'Oranges', color: 'blue.6' },
            { name: 'Tomatoes', color: 'teal.6' },
          ]}
          curveType="natural"
          tickLine="x"
          className="w-full"
          withDots={false}
        />
      </section>
    </section>
  )
}