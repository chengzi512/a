zim:文件夹密码 Zim（大写的Z）

```
1. 查看系统是2位还是64位 
getconf LONG_BIT
2. 下载 node
wget https://nodejs.org/dist/v4.4.4/node-v4.4.4-linux-x64.tar.xz
3. 提取tar文件
tar xvf node-v0.12.0.tar.xz
4. 改变工作目录节点
cd node-v*



```

**如何查看已安装的CentOS版本信息**：

1)[root@localhost ~]# cat /proc/version

Linux version 2.6.18-194.el5 (mockbuild@builder10.centos.org) (gcc version 4.1.2 20080704 ([Red Hat](http://www.linuxidc.com/topicnews.aspx?tid=10) 4.1.2-48)) #1 SMP Fri Apr 2 14:58:14 EDT 2010

2)

[root@localhost ~]# uname -a

Linux localhost.localdomain 2.6.18-194.el5 #1 SMP Fri Apr 2 14:58:14 EDT 2010 x86_64 x86_64 x86_64 GNU/Linux

3)

[root@localhost ~]# uname -r



```
1. 创建目录
mkdir -p 目录名字
2. 新开centos终端必须source /etc/profile 才能使用mvn？
写到/etc/bashrc就可以了，记得/etc/profile有些bash语法不能写进去，否则不生效，原因不明。我也遇到过这样的情况，export写到/etc/profile不生效，写到/etc/bashrc(ubuntu为/etc/bash.bashrc)中就可以生效。
参考一下这个：http://19055.blog.51cto.com/9055/1144600
```

