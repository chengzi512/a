/**
 * Created by Administrator on 2016/11/3.
 */
var http= require('http');
http.createServer(function(request,response){
    //����httpͷ��
    //HTTP״ֵ̬ 200 ok
    //�������� text/plain
    response.writeHead(200,{'Cotent-Type':'text/plain'});

    //������Ӧ���� ��Hellod World"
    response.end("Hello World\n  ��node��ķ��������гɹ�����\n");
}).listen(8888);

//�ն˴�ӡ������Ϣ
console.log("Server running at http://127.0.0.1:8888");