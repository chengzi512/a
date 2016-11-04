/**
 * Created by Administrator on 2016/11/3.
 */
module.exports = function () {

    "use strict";

    console.time('[HttpServer][Start]');

    //httpЭ��ģ��
    var http = require('http');
    //url����ģ��
    var url = require('url');
    //�ļ�ϵͳģ��
    var fs = require("fs");
    //·������ģ��
    var path = require("path");

    return {
        //��������
        start: function () {
            var port = this.config.port;
            var ip = this.config.ip;
            //����һ������
            var httpServer = http.createServer(this.processRequest.bind(this));

            //��ָ���Ķ˿ڼ�������
            httpServer.listen(port, function () {
                console.log("[HttpServer][Start]", "runing at http://" + ip + ":" + port + "/");
                console.timeEnd("[HttpServer][Start]");
            });

            httpServer.on("error", function (error) {
                console.error(error);
            });
        },

        /**
         * ��������
         * @param request
         * @param response
         */
        processRequest: function (request, response) {
            var hasExt = true;
            var requestUrl = request.url;
            var pathName = url.parse(requestUrl).pathname;

            //��������·�����н��룬��ֹ��������
            pathName = decodeURI(pathName);

            //����·����û����չ��
            if (path.extname(pathName) === '') {
                //����������/��β�ģ���/����301�ض���
                if (pathName.charAt(pathName.length - 1) != "/") {
                    pathName += "/";
                    var redirect = "http://" + request.headers.host + pathName;
                    response.writeHead(301, {
                        location: redirect
                    });
                    response.end();
                }
                //����Ĭ�ϵķ���ҳ��,������ҳ�治һ������,�����ᴦ��
                pathName += "index.html";
                hasExt = false; //����Ĭ��ҳ���ǳ����Զ����ӵ�
            }

            //��ȡ��Դ�ļ�������·��
            var filePath = path.join("http/webroot", pathName);

            //��ȡ��Ӧ�ļ����ĵ�����
            var contentType = this.getContentType(filePath);

            //�����ļ�������
            fs.exists(filePath, function (exists) {
                if (exists) {
                    response.writeHead(200, { "content-type": contentType });
                    var stream = fs.createReadStream(filePath, { flags: "r", encoding: null });
                    stream.on("error", function () {
                        response.writeHead(500, { "content-type": "text/html" });
                        response.end("<h1>500 Server Error</h1>");
                    });
                    //�����ļ�����
                    stream.pipe(response);
                } else {
                    //�ļ��������ڵ�����
                    if (hasExt) {
                        //���������ļ����ǳ����Զ����ӵģ�ֱ�ӷ���404
                        response.writeHead(404, { "content-type": "text/html" });
                        response.end("<h1>404 Not Found</h1>");
                    } else {
                        //�����ļ��ǳ����Զ����ӵ��Ҳ����ڣ�����ʾ�û�ϣ�����ʵ��Ǹ�Ŀ¼�µ��ļ��б�
                        var html = "<head><meta charset='utf-8'></head>";

                        try {
                            //�û�����Ŀ¼
                            var filedir = filePath.substring(0, filePath.lastIndexOf('\\'));
                            //��ȡ�û�����·���µ��ļ��б�
                            var files = fs.readdirSync(filedir);
                            //������·���µ������ļ�һһ�оٳ����������ӳ����ӣ��Ա��û���һ������
                            for (var i in files) {
                                var filename = files[i];
                                html += "<div><a  href='" + filename + "'>" + filename + "</a></div>";
                            }
                        } catch (e) {
                            html += "<h1>�����ʵ�Ŀ¼������</h1>";
                        }
                        response.writeHead(200, { "content-type": "text/html" });
                        response.end(html);
                    }
                }
            });
        },

        /**
         * ��ȡ�ĵ�����������
         * @param filePath
         * @returns {*}
         */
        getContentType: function (filePath) {
            var contentType = this.config.mime;
            var ext = path.extname(filePath).substr(1);
            if (contentType.hasOwnProperty(ext)) {
                return contentType[ext];
            } else {
                return contentType.default;
            }
        },

        ///������Ϣ
        config: {
            port: 8888,
            ip: '127.0.0.1',
            mime: {
                html: "text/html",
                js: "text/javascript",
                css: "text/css",
                gif: "image/gif",
                jpg: "image/jpeg",
                png: "image/png",
                ico: "image/icon",
                txt: "text/plain",
                json: "application/json",
                default: "application/octet-stream"
            }
        }
    };
}();

//# sourceMappingURL=server-compiled.js.map