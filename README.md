upgrade 13 to 15 next js
{
  "name": "vuexy-react-admin-template",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "lint": "eslint --fix \"src/**/*.{js,jsx}\"",
    "format": "prettier --write \"src/**/*.{js,jsx}\"",
    "build:icons": "node src/iconify-bundle/bundle-icons-react.js"
  },
  "dependencies": {
    "@babel/core": "7.20.12",
    "@babel/eslint-parser": "7.19.1",
    "@casl/ability": "6.3.3",
    "@casl/react": "3.1.0",
    "@emotion/cache": "11.10.5",
    "@emotion/react": "11.10.5",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "@fullcalendar/bootstrap5": "6.0.2",
    "@fullcalendar/common": "5.11.3",
    "@fullcalendar/core": "6.0.2",
    "@fullcalendar/daygrid": "6.0.2",
    "@fullcalendar/interaction": "6.0.2",
    "@fullcalendar/list": "6.0.2",
    "@fullcalendar/react": "6.0.2",
    "@fullcalendar/timegrid": "6.0.2",
    "@hookform/resolvers": "2.9.10",
    "@iconify/react": "4.0.1",
    "@mui/lab": "5.0.0-alpha.115",
    "@mui/material": "5.11.4",
    "@mui/utils": "^6.4.3",
    "@mui/x-data-grid": "5.17.18",
    "@popperjs/core": "2.11.6",
    "@reduxjs/toolkit": "1.9.1",
    "apexcharts-clevision": "3.28.5",
    "axios": "^1.4.0",
    "axios-mock-adapter": "1.21.2",
    "babel-eslint": "10.1.0",
    "bootstrap-icons": "1.10.3",
    "chart.js": "4.1.2",
    "cleave.js": "1.6.0",
    "clipboard-copy": "4.0.1",
    "clsx": "1.2.1",
    "date-fns": "2.29.3",
    "draft-js": "0.11.7",
    "formik": "^2.4.2",
    "i18next": "22.4.9",
    "i18next-browser-languagedetector": "7.0.1",
    "i18next-http-backend": "2.1.1",
    "jsonwebtoken": "8.5.1",
    "keen-slider": "6.8.5",
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "nprogress": "0.2.0",
    "payment": "2.4.6",
    "prismjs": "1.29.0",
    "react-apexcharts": "1.4.0",
    "react-chartjs-2": "5.1.0",
    "react-credit-cards": "0.8.3",
    "react-datepicker": "4.8.0",
    "react-draft-wysiwyg": "1.15.0",
    "react-dropzone": "14.2.3",
    "react-hook-form": "7.41.5",
    "react-hot-toast": "2.4.0",
    "react-i18next": "12.1.4",
    "react-perfect-scrollbar": "1.5.8",
    "react-popper": "2.3.0",
    "react-query": "^3.39.3",
    "react-redux": "8.0.5",
    "recharts": "2.2.0",
    "stylis": "4.1.3",
    "stylis-plugin-rtl": "2.1.1",
    "yup": "0.32.11"
  },
  "devDependencies": {
    "@iconify/iconify": "3.0.1",
    "@iconify/json": "2.2.4",
    "@iconify/tools": "2.2.0",
    "@iconify/types": "2.0.0",
    "@iconify/utils": "2.0.11",
    "eslint": "8.31.0",
    "eslint-config-next": "13.1.1",
    "eslint-config-prettier": "8.6.0",
    "eslint-import-resolver-alias": "1.1.2",
    "eslint-import-resolver-typescript": "3.5.2",
    "eslint-plugin-import": "2.26.0",
    "prettier": "2.8.2"
  },
  "resolutions": {
    "minipass": "4.0.0",
    "@mui/x-data-grid/@mui/system": "5.4.1",
    "react-credit-cards/prop-types": "15.7.2",
    "react-hot-toast/goober/csstype": "3.0.10",
    "recharts/react-smooth/prop-types": "15.6.0",
    "react-draft-wysiwyg/html-to-draftjs/immutable": "4.2.2",
    "react-draft-wysiwyg/draftjs-utils/immutable": "4.2.2",
    "@emotion/react/@emotion/babel-plugin/@babel/core": "7.0.0",
    "@emotion/react/@emotion/babel-plugin/@babel/plugin-syntax-jsx/@babel/core": "7.0.0"
  },
  "overrides": {
    "react-credit-cards": {
      "react": "$react"
    }
  }
}
