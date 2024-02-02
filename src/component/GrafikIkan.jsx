import {
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { faker } from '@faker-js/faker';

const categories = [
  "Cakalang",
  "Bandeng",
  "Nila",
  "Udang Vaname",
  "Kakap Merah",
  "Tongkol",
  "Gurami",
  "Tuna",
  "Lele",
  "Kerapu",
];

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Minggu Sebelumnya",
      data: categories.map(() => faker.datatype.number({ min: 0, max: 100 })),
    },
    {
      name: "Minggu Terakhir",
      data: categories.map(() => faker.datatype.number({ min: 0, max: 100 })),
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#016EB9", "#F5A330"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Cakalang",
        "Bandeng",
        "Nila",
        "Udang Vaname",
        "Kakap Merah",
        "Tongkol",
        "Gurami",
        "Tuna",
        "Lele",
        "Kerapu",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "light",
    },
  },
};

const GrafikIkan = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-[50.39px]">
          <div className="text-center text-black text-[32px] font-bold font-['Montserrat'] leading-[38.40px]">Grafik Harga Ikan</div>
        </div>
        <div className="mx-[72px] px-[17px] pt-[17px] pb-[33px] bg-white rounded-lg border border-black border-opacity-20">
          <div className="w-full justify-start items-start">
            {/* <div>
              <div className="text-center text-zinc-800 text-xl font-bold font-inter">Harga Rata-rata Ikan Di Bangka Belitung</div>
              <div>
                <div className="text-center text-zinc-800 text-xl font-bold font-inter">​05-12 Jul 2023</div>
              </div>
            </div>
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
              >
              </CardHeader>
              <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
              </CardBody>
            </Card>
            <div className="pl-7 pr-[1020px] pb-[0.50px] justify-start items-start inline-flex">
              <div className="text-black text-[13px] font-normal font-['Open Sans'] leading-tight">Ket: size ikan mempengaruhi harga</div>
            </div> */}
            <div class="w-full justify-start items-start inline-flex">
              <div class="h-[400px] justify-start items-start flex">
                <div class="h-[400px] justify-center items-start flex">
                  <div class="w-full h-[400px] relative">
                    <div class="w-[1174px] h-[246px] left-[77.50px] top-[67px] absolute">
                    </div>
                    <div class="w-[1174px] h-[247px] left-[78px] top-[66.50px] absolute">
                    </div>
                    <div class="h-[246px] left-[12.20px] top-[67px] absolute">
                      <div class="left-0 top-[141.50px] absolute origin-top-left -rotate-90 text-center text-stone-500 text-[12.80px] font-normal font-Inter">Harga</div>
                    </div>
                    <div class="w-[1174px] h-[246px] left-[78px] top-[67px] absolute">
                      {/* <div class="w-[1174px] h-[246px] left-0 top-0 absolute">
                        <div class="w-[1086px] h-[221px] left-[26.50px] top-[25.50px] absolute">
                        </div>
                      </div> */}
                      <div class="w-[1174px] h-[246px] left-0 top-0 absolute">
                        <Card>
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                          >
                          </CardHeader>
                          <CardBody className="px-2 pb-0">
                            <Chart {...chartConfig} />
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                    <div class="w-[28.50px] h-7 left-[1224px] top-[10.50px] absolute">
                      <div class="left-0 top-[5.20px] absolute"></div>
                    </div>
                    <div class="w-[383px] h-[45px] left-[443.50px] top-[5.80px] absolute">
                      <div class="left-0 top-0 absolute text-center text-zinc-800 text-xl font-bold font-Inter">Harga Rata-rata Ikan Di Bangka Belitung</div>
                      <div class="left-[115.50px] top-[22px] absolute text-center text-zinc-800 text-xl font-bold font-Inter">​05-12 Jul 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-7 pr-[1020px] pb-[0.50px] justify-start items-start inline-flex">
              <div class="text-black text-[13px] font-normal font-['Open Sans'] leading-tight">Ket: size ikan mempengaruhi harga</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrafikIkan