/**
 * @file 解决使用 vscode 配置 prettier 不生效问题
 * @author lishaohai
 */
module.exports = {
    trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    tabWidth: 4, // 缩进字节数
    semi: true, // 句尾添加分号
    singleQuote: true, // 使用单引号代替双引号
    proseWrap: 'never',
    printWidth: 120, // 超过最大值换行
    bracketSpacing: false, // 对象紧贴花括号部分不允许包含空格
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    space_after_anon_function: true,
    space_after_named_function: true
};
