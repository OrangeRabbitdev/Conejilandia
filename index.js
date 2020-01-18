

const Discord = require('discord.js');
const client = new Discord.Client();
const channel = client.channels.get('667760862144233506');


var fs = require('fs');
var readMe = fs.readFileSync('readMe.txt', 'utf8');
var readFile = fs.readFileSync('writeMe.txt', 'utf8');

var isSend = false;
var activeSend = false;
var counter = 0;

client.on('message', msg =>{

    if(msg.author.bot)return;



    
    if(msg.content.includes("VIP") || msg.content.includes("Vip") || msg.content.includes("vip") || msg.content.includes("vIp") || msg.content.includes("viP") || msg.content.includes("VIp") || msg.content.includes("ViP")){
       
       msg.author.send(`Hi Firestormer! Which of these languages do you prefer? \n EN   ES    FR  RU   PT/BR`);
    }

    if(msg.content == "ES" || msg.content == "Es"){
        counter = 1;
    }

    if(msg.content == "EN" || msg.content == "En"){
        counter = 2;
    }

    if(msg.content.includes == 'FR' || msg.content == 'Fr'){
        counter = 3;
    }

    if(msg.content == 'PT/BR' || msg.content == 'Pt/br' || msg.content == "PT" || msg.content == "Pt" || msg.content == "BR" || msg.content == "Br"){
        counter = 4;
    }

    if(msg.content == 'RU' || msg.content == 'Ru'){
        counter = 5;
    }

    if(counter == 1){

        if(msg.content == 'ES' || msg.content == 'Es'){
            msg.author.send("¡Gracias por boostear nuestro servidor de Discord! :slight_smile: Para poder proporcionarle nuestro servicio VIP necesito que me diga el correo de su cuenta de Firestorm.");
        }
        

        if(msg.content.includes('@') || msg.content.includes('#')){
            msg.author.send("Hemos registrado su cuenta como VIP correctamente. Activaremos su servicio VIP en las próximas 24 horas. Si en ese plazo no ha sido aplicada la promoción en su cuenta por favor contacte con Legnax#7777 o Quiët#1109 para que podamos activarlo manualmente.")
            client.channels.get('667760862144233506').send(`${msg.author.tag}`)
            client.channels.get('667760862144233506').send(`${msg.author.lastMessage}`)
            client.channels.get('667760862144233506').send(`${msg.author.id}`)
        }
    }

    if(counter == 2){

        if(msg.content == 'EN' || msg.content == 'En'){
            msg.author.send("Thanks for boosting our Discord server! :slight_smile: In order to provide you with our VIP service, I need you to tell me your Firestorm account email.");
        }
       

        if(msg.content.includes('@') || msg.content.includes('#')){
            msg.author.send("We have registered your account as VIP correctly. We will activate your VIP service in the next 24 hours. If the promotion has not been applied to your account within 24 hours, please contact Legnax#7777 or Quiët#1109 so we can activate it manually.")
            client.channels.get('667760862144233506').send(`${msg.author.tag}`)
            client.channels.get('667760862144233506').send(`${msg.author.lastMessage}`)
            client.channels.get('667760862144233506').send(`${msg.author.id}`)
        }
    }

    if(counter == 3){
        if(msg.content == 'FR' || msg.content == 'Fr'){
            msg.author.send("Merci d'avoir boosté notre serveur Discord ! :slight_smile: Avant de vous passer en VIP, nous avons besoin que vous nous donniez le mail de votre compte.")
        }

        if(msg.content.includes('@') || msg.content.includes('#')){
            msg.author.send("Votre compte a bien été enregistré en tant que VIP. Votre VIP sera activé dans les 24 heures. Si votre compte n'est pas VIP après ce délai, merci de contacter Legnax#7777 ou Quiët#1109 pour que nous l'activions manuellement.")
            client.channels.get('667760862144233506').send(`${msg.author.tag}`)
            client.channels.get('667760862144233506').send(`${msg.author.lastMessage}`)
            client.channels.get('667760862144233506').send(`${msg.author.id}`)
        }
    }



    if(counter == 4){
        if(msg.content == 'PT' || msg.content == 'Pt' || msg.content == 'PT/BR' || msg.content == 'Pt/br' || msg.content == "BR" || msg.content == "Br"){
            msg.author.send("Obrigado por impulsionar o nosso servidor Discord! :slight_smile: Para fornecer nosso serviço VIP, preciso que você me informe o e-mail da sua conta Firestorm.")
        }

        if(msg.content.includes('@') || msg.content.includes('#')){
            msg.author.send("Nós registramos sua conta como VIP corretamente. Ativaremos seu serviço VIP nas próximas 24 horas. Se o benefício não for aplicado à sua conta dentro de 24 horas, entre em contato com Legnax#7777 ou Quiët#1109 para que possamos ativá-lo manualmente.")
            client.channels.get('667760862144233506').send(`${msg.author.tag}`)
            client.channels.get('667760862144233506').send(`${msg.author.lastMessage}`)
            client.channels.get('667760862144233506').send(`${msg.author.id}`)
        }
    }


    if(counter == 5){
        if(msg.content == 'RU' || msg.content == 'Ru'){
            msg.author.send("Спасибо за поддержку нашего сервера Discord! :slight_smile: Чтобы предоставить вам наш VIP-сервис, мне нужно, чтобы вы сообщили мне свой адрес электронной почты в учётной записи Firestorm.")
        }

        if(msg.content.includes('@') || msg.content.includes('#')){
            msg.author.send("Мы должны правильно зарегистрировать ваш аккаунт как VIP.  Мы активируем ваш VIP сервис в ближайшие 24 часа.  Если акция не была применена к вашей учетной записи в течение 24 часов, пожалуйста, свяжитесь с Legnax#7777 или Quiët#1109, чтобы мы могли активировать ее вручную.")
            client.channels.get('667760862144233506').send(`${msg.author.tag}`)
            client.channels.get('667760862144233506').send(`${msg.author.lastMessage}`)
            client.channels.get('667760862144233506').send(`${msg.author.id}`)
        }
    }


   
    
   
   // fs.writeFileSync('writeMe.txt', `${msg.author._content}`.toString())

    if(msg.content == "!MostrarDatos"){
        msg.channel.send(readFile);
    }

    console.log(msg.author);

});





client.on("ready", () =>{
    console.log(`Ready ${client.user.tag}`);
})



client.login('NjY3Nzk0MTExNjQ2MTM4Mzkx.XiH5xg.XcOuFWXn_TP7MwlLWi84QWUrMWM')