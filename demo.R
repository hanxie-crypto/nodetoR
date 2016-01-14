library(Cairo);

main<- function(a){
    json_a<-fromJSON(a);
    x<-rnorm(json_a[1]);
    y<-rnorm(json_a[1]);
    png(file="E:\\commonproj\\nodetoR\\public\\new.png",width=640,height=480);
    plot(x,y,col="#ff000018",pch = 19,cex =2,main="plot");
    dev.off();
    return("http://localhost:3333/new.png");
}
