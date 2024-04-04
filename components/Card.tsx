import { Paper, Text } from "@mantine/core"
import { AreaChart } from "@mantine/charts"

import { data } from "@/lib/data";


export default function Card() {
  return (
    <Paper shadow="sm" p="sm" radius="md" withBorder
    className="shadow-md basis-1/4 h-[140px] mb-2">
      <Text size="sm" c="dimmed">
        Today Revenue
      </Text>
      <Text className="text-[#5F6979] md:text-lg lg:text-2xl font-bold">
        $8,521
      </Text>
      <section className="h-[90px] overflow-hidden -mt-5">
        <AreaChart
          h={300}
          data={data}
          dataKey="date"
          curveType="natural"
          withGradient
          gridAxis="none"
          withDots={false}
          withYAxis={false}
          withXAxis={false}
          series={[{ name: 'Apples', color: 'green' }]}
        />
      </section>
    </Paper>
  );
}





