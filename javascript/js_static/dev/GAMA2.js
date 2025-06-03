class GAMA2 {

    host = "";
    modelPath = 'C:/Users/rhmha/Downloads/GAMA_2025.05.4_Windows_with_JDK_10.05.25_f9040ca/headless/samples/roadTraffic/models/model7';
    experimentName = 'road_traffic';
    socket = 0;

    constructor(address, md, exp) {
        this.host = address;
        this.modelPath = md;
        this.experimentName = exp;
        this.socket = new WebSocket("ws://localhost:1000");
        socket.onopen = () => {}
    }

    

}