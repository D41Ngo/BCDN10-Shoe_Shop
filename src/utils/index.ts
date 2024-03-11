// Không có tham số, và return về bất kỳ kiểu dữ liệu nào
type TFunction = () => any;

export const IIFE = (cb: TFunction) => {
    cb();
};
