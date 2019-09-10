# 使用基础镜像
FROM node:8
# 声明需要被映射的端口
EXPOSE 8080
# 创建用于存放源代码的工作目录
WORKDIR /app
# 拷贝配置文件
COPY *.json /app/
COPY yarn.lock /app
# 安装依赖
RUN yarn install
# 拷贝源代码
COPY . .
# 设置默认启动命令
CMD ["npm", "start"]
EXPOSE 8080