import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./index.html", "./src/**/*.{html,jsx,js,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
})

