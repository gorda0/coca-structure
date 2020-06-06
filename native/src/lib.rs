#[no_mangle]
pub extern "C" fn bigger_than(a: i32, b: i32) -> bool {
    return a > b;
}

#[no_mangle]
pub extern "C" fn smaller_than(a: i32, b: i32) -> bool {
    return a < b;
}
