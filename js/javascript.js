var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {


    $scope.phones = [
        {
            image: "iphone11promax.webp",
            name: "iPhone 11 Pro Max Cũ Đẹp 64GB",
            price: 10790000,
            del: 18590000
        },

        {
            image: "iPhone-12-Pro-Max_(2)(1).webp",
            name: "iPhone 12 Pro Max 128GB Cũ Đẹp",
            price: 15990000,
            del: 24990000
        },

        {
            image: "Z-Fold-4-xanh.webp",
            name: "Samsung Galaxy Z Fold4 12GB/256GB Chính hãng",
            price: 29990000,
            del: 40990000
        },

        {
            image: "A53-cam.webp",
            name: "Samsung Galaxy A53 5G 8GB 128GB Chính Hãng",
            price: 6990000,
            del: 9990000
        },

        {
            image: "Redmi-Note-11-xanh.webp",
            name: "Xiaomi Redmi Note 11S 8GB/128GB Chính hãng",
            price: 5390000,
            del: 6690000
        },

        {
            image: "iPhone-14-Pro-Max(5).webp",
            name: "iPhone 14 Pro Max 128GB Chính hãng VN/A",
            price: 29890000,
            del: 36390000
        },

        {
            image: "s22Untral.webp",
            name: "Samsung Galaxy S22 Ultra 8GB/128GB Chính hãng",
            price: 19990000,
            del: 30990000
        },

        {
            image: "iPhone-11-64GB-Trang.webp",
            name: "iPhone 11 64GB Chính Hãng VN/A",
            price: 10790000,
            del: 17990000
        }
    ];

    $scope.laptops = [
        {
            image: "Macbook-Air-M2.webp",
            name: "Macbook Air M2 8GB/256GB Chính Hãng",
            price: 25890000,
            del: 30490000
        },

        {
            image: "Macbook-Pro-M1-2021(2).webp",
            name: "MacBook Pro 14 inch M1 Pro 10CPU 16GB",
            price: 48490000,
            del: 63990000
        },

        {
            image: "m12020.webp",
            name: "MacBook Pro 13 inch M1 8GB/512GB 2020",
            price: 28990000,
            del: 36390000
        },

        {
            image: "lg2021.webp",
            name: "Laptop LG gram 2021 16Z90P",
            price: 27990000,
            del: 48890000
        },
    ];

    $scope.watchs = [
        {
            image: "dh1.webp",
            name: "Đồng hồ thông minh dTime Luxury",
            price: 990000,
            del: 2190000
        },

        {
            image: "dh2.webp",
            name: "Apple Watch Series 7 45mm GPS Viền nhôm dây cao su",
            price: 8890000,
            del: 11290000
        },

        {
            image: "dh3.webp",
            name: "Đồng Hồ Thông Minh dTime Gold",
            price: 990000,
            del: 1990000
        },

        {
            image: "dh4.webp",
            name: "Apple Watch SE 2022 40mm GPS Viền nhôm dây cao su",
            price: 5890000,
            del: 6790000
        },
    ];

    $scope.sales1 = [
        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/A23-4G-den.webp",
            name: "Samsung Galaxy A23 4GB/128GB Chính Hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/Z-Fold-4-xanh.webp",
            name: "Samsung Galaxy Z Fold4 12GB/256GB Chính hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/A53-cam.webp",
            name: "Samsung Galaxy A53 5G 8GB 128GB Chính Hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/04/resized/4(2).webp",
            name: "Samsung Galaxy S22 Ultra 8GB/128GB Chính hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2022/12/01/resized/redmi-note-11-4g-chinh-hang_1648892675.webp",
            name: "Redmi Note 11 Xiaomi Fan Festival chính hãng"
        },
    ];
    $scope.sales2 = [
        {
            image: "https://didongthongminh.vn/images/products/2022/12/29/resized/Tab-A7-Lite.webp",
            name: "Máy tính bảng Samsung Galaxy Tab A7 Lite (SM-T225N)"
        },

        {
            image: "https://didongthongminh.vn/images/products/2022/12/29/resized/xiaomi-remi-10c-xanh-la.webp",
            name: "Xiaomi Redmi 10C 4GB/128GB Chính Hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/A13-cam.webp",
            name: "Samsung Galaxy A53 5G 8GB 128GB Chính Hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/A23-4G-den.webp",
            name: "Samsung Galaxy A23 4GB/128GB Chính Hãng"
        },

        {
            image: "https://didongthongminh.vn/images/products/2023/01/02/resized/iPhone-12-Pro-Max_(2)(1).webp",
            name: "iPhone 12 Pro Max Cũ Đẹp 256GB"
        },
    ];
});