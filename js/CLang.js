var TEXT_PRELOADER_CONTINUE = "START";
var TEXT_MULTIPLIER = "x";
var TEXT_SCORE = "SCORE";
var TEXT_LEVEL_SCORE = "LEVEL SCORE";
var TEXT_TOTAL = "TOTAL SCORE";
var TEXT_GOAL = "GOAL!";
var TEXT_ARE_SURE = "ARE YOU SURE YOU WANT TO EXIT THE GAME?";
var TEXT_CONFIRM_DELETE = "ALL SAVING WILL BE DELETED! ARE YOU SURE?";
var TEXT_SAVED = "SAVED!";
var TEXT_MISSED = "MISS!";
var TEXT_HELP = "SWIPE TO KICK THE BALL";
var TEXT_HELP_KEEPER = "TAP THE SCREEN TO LET THE OPPONENT KICK";
var TEXT_WIN = "YOU WON";
var TEXT_LOSE = "YOU LOSE";
var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
var TEXT_VS = "VS";
var TEXT_MATCH = "MATCH";
var TEXT_SELECT_TEAM = "SELECT YOUR TEAM";
var TEXT_MATCHES = "MATCHES";
var TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT LOCAL STORAGE. IF YOU'RE USING SAFARI, IT MAY BE RELATED TO PRIVATE BROWSING. AS A RESULT, SOME INFO MAY NOT BE SAVED OR SOME FEATURES MAY NOT BE AVAILABLE.";

var TEXT_PLAYER = "PLAYER";
var TEXT_CPU = "CPU";
var TEXT_EXTRA = "EXTRA";


///////////// GAME MULTIPLAYER TEXT
var TEXT_WAIT_OPPONENT = "WAITING OPPONENT...";
var TEXT_OPPONENT_LEFT = "OPPONENT LEFT!";
var TEXT_PLAYER_DISCONNECTED = "YOU LEFT!";
var TEXT_REMATCH = "do you want the re-match?";
var TEXT_WAIT_STRIKER = "YOUR OPPONENT IS KICKING";
var TEXT_GET_READY = "GET READY!";
var TEXT_WAIT_GOALKEEPER = "YOUR OPPONENT IS READY TO SAVE!";

///////////// LOGIN ROOM SYSTEM TEXT
var TEXT_SYS_CHOOSENICK = "Choose nickname";
var TEXT_SYS_UPDATE = "update";
var TEXT_SYS_MATCH_LIST = "Match list";
var TEXT_SYS_QUICKMATCH = "quick match";
var TEXT_SYS_CREATEMATCH = "create match";
var TEXT_SYS_BACK = "back";
var TEXT_SYS_OK = "ok";
var TEXT_SYS_CREATE = "create";
var TEXT_SYS_CLOSE = "close";
var TEXT_SYS_LOADING = "Loading...";
var TEXT_SYS_NAMEROOM = "Name Room";
var TEXT_SYS_CREATEROOM = "Create Room";
var TEXT_SYS_PASSWORD = "Password";
var TEXT_SYS_INFOPASS = "If you don\'t set a password this room will be public.";
var TEXT_SYS_TYPEROOMPASS = "Type Room Password";
var TEXT_WRONG_PASSWORD = "Wrong Password!";
var TEXT_NETWORK_CONNECTING = "connecting...";
var TEXT_ROOM_IS_FULL = "Room is full!";
var TEXT_FIND_OPPONENT = "finding opponent...";
var TEXT_CONNECT_TO_LOBBY = "Connect to lobby...";
var TEXT_ROOM_DOESNT_EXIST = "Room doesn't exist!";
var TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "waiting for opponent in room: ";
var TEXT_SYS_FINDROOM = "find a room...";
var TEXT_SYS_DEFAULTROOMNAME = "%s's room";
var TEXT_WAITING_ROOM_MESSAGE = "This room can contain max %d players";
var TEXT_INVALID_NAME = "INVALID NICKNAME";

var TEXT_NO_CONNECTION = "NO CONNECTION<br/>(Connect to find someone to play online)";
var TEXT_REMATCH_ALERT = "%s WANTS TO PLAY AGAIN";
var TEXT_SYS_INVITE = "INVITE";
var TEXT_SYS_COPIED_TO_CLIPBOARD = 'Game link copied to your Clipboard. Share it to your friends!';
var TEXT_PLAYER_KICKED = "You were kicked from the game due to inactivity."; 

function refreshLanguage(){
	if(s_iCurLang === LANG_AR ){
        s_oCanvas.setAttribute('dir','rtl');
    }else{
        s_oCanvas.setAttribute('dir','ltr');
    }
	
	switch(s_iCurLang){
		case LANG_EN:{
			TEXT_PRELOADER_CONTINUE = "START";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "SCORE";
			TEXT_LEVEL_SCORE = "LEVEL SCORE";
			TEXT_TOTAL = "TOTAL SCORE";
			TEXT_GOAL = "GOAL!";
			TEXT_ARE_SURE = "ARE YOU SURE YOU WANT TO EXIT THE GAME?";
			TEXT_CONFIRM_DELETE = "ALL SAVING WILL BE DELETED! ARE YOU SURE?";
			TEXT_SAVED = "SAVED!";
			TEXT_MISSED = "MISS!";
			TEXT_HELP = "SWIPE TO KICK THE BALL";
			TEXT_HELP_KEEPER = "TAP THE SCREEN TO LET THE OPPONENT KICK";
			TEXT_WIN = "YOU WON";
			TEXT_LOSE = "YOU LOSE";
			TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
			TEXT_VS = "VS";
			TEXT_MATCH = "MATCH";
			TEXT_SELECT_TEAM = "SELECT YOUR TEAM";
			TEXT_MATCHES = "MATCHES";
			TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT LOCAL STORAGE. IF YOU'RE USING SAFARI, IT MAY BE RELATED TO PRIVATE BROWSING. AS A RESULT, SOME INFO MAY NOT BE SAVED OR SOME FEATURES MAY NOT BE AVAILABLE.";

			TEXT_PLAYER = "PLAYER";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "WAITING OPPONENT...";
			TEXT_OPPONENT_LEFT = "OPPONENT LEFT!";
			TEXT_PLAYER_DISCONNECTED = "YOU LEFT!";
			TEXT_REMATCH = "do you want the re-match?";
			TEXT_WAIT_STRIKER = "YOUR OPPONENT IS KICKING";
			TEXT_GET_READY = "GET READY!";
			TEXT_WAIT_GOALKEEPER = "YOUR OPPONENT IS READY TO SAVE!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "Choose nickname";
			TEXT_SYS_UPDATE = "update";
			TEXT_SYS_MATCH_LIST = "Match list";
			TEXT_SYS_QUICKMATCH = "quick match";
			TEXT_SYS_CREATEMATCH = "create match";
			TEXT_SYS_BACK = "back";
			TEXT_SYS_OK = "ok";
			TEXT_SYS_CREATE = "create";
			TEXT_SYS_CLOSE = "close";
			TEXT_SYS_LOADING = "Loading...";
			TEXT_SYS_NAMEROOM = "Room Name";
			TEXT_SYS_CREATEROOM = "Create Room";
			TEXT_SYS_PASSWORD = "Password";
			TEXT_SYS_INFOPASS = "If you don\'t set a password this room will be public.";
			TEXT_SYS_TYPEROOMPASS = "Type Room Password";
			TEXT_WRONG_PASSWORD = "Wrong Password!";
			TEXT_NETWORK_CONNECTING = "connecting...";
			TEXT_ROOM_IS_FULL = "Room is full!";
			TEXT_FIND_OPPONENT = "finding opponent...";
			TEXT_CONNECT_TO_LOBBY = "Connect to lobby...";
			TEXT_ROOM_DOESNT_EXIST = "Room doesn't exist!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "waiting for opponent in room: ";
			TEXT_SYS_FINDROOM = "find a room...";
			TEXT_SYS_DEFAULTROOMNAME = "%s's room";
			TEXT_WAITING_ROOM_MESSAGE = "This room can contain max %d players";
			TEXT_INVALID_NAME = "INVALID NICKNAME";
			
			TEXT_NO_CONNECTION = "NO CONNECTION<br/>(Connect to find someone to play online)";
			TEXT_REMATCH_ALERT = "%s WANTS TO PLAY AGAIN";
			TEXT_SYS_INVITE = "INVITE";
			TEXT_SYS_COPIED_TO_CLIPBOARD = 'Game link copied to your Clipboard. Share it to your friends!';
			TEXT_PLAYER_KICKED = "You were kicked from the game due to inactivity."; 
			
			break;
		}
		case LANG_RU:{
			TEXT_PRELOADER_CONTINUE = "НАЧАТЬ";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "СЧЕТ";
			TEXT_LEVEL_SCORE = "СЧЕТ УРОВНЯ";
			TEXT_TOTAL = "ОБЩИЙ СЧЕТ";
			TEXT_GOAL = "ГОЛ!";
			TEXT_ARE_SURE = "ВЫ УВЕРЕНЫ, ЧТО ХОТИТЕ ВЫЙТИ?";
			TEXT_CONFIRM_DELETE = "ВСЕ СОХРАНЕНИЯ БУДУТ УДАЛЕНЫ! ВЫ УВЕРЕНЫ?";
			TEXT_SAVED = "ЗАЩИТИЛ!";
			TEXT_MISSED = "МИМО!";
			TEXT_HELP = "ПРОВЕДИТЕ, ЧТОБЫ УДАРИТЬ ПО МЯЧУ";
			TEXT_HELP_KEEPER = "НАЖМИТЕ НА ЭКРАН, ЧТОБЫ ПРОТИВНИК УДАРИЛ";
			TEXT_WIN = "ВЫ ПОБЕДИЛИ";
			TEXT_LOSE = "ВЫ ПРОИГРАЛИ";
			TEXT_CREDITS_DEVELOPED = "РАЗРАБОТЧИК";
			TEXT_VS = "ПРОТИВ";
			TEXT_MATCH = "МАТЧ";
			TEXT_SELECT_TEAM = "ВЫБЕРИТЕ КОМАНДУ";
			TEXT_MATCHES = "МАТЧИ";
			TEXT_ERR_LS = "ВАШ БРАУЗЕР НЕ ПОДДЕРЖИВАЕТ ЛОКАЛЬНОЕ СОХРАНЕНИЕ. ЕСЛИ ВЫ ИСПОЛЬЗУЕТЕ SAFARI, ПРИЧИНОЙ МОЖЕТ БЫТЬ ИСПОЛЬЗОВАНИЕ 'РЕЖИМА ПРИВАТНОГО ПРОСМОТРА'. НЕКОТОРЫЕ ДАННЫЕ И ФУНКЦИИ МОГУТ НЕ СОХРАНЯТЬСЯ ИЛИ БЫТЬ НЕДОСТУПНЫ.";

			TEXT_PLAYER = "ИГРОК";
			TEXT_CPU = "КОМПЬЮТЕР";
			TEXT_EXTRA = "ЭКСТРА";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "ОЖИДАНИЕ СОПЕРНИКА...";
			TEXT_OPPONENT_LEFT = "СОПЕРНИК ПОКИНУЛ ИГРУ!";
			TEXT_PLAYER_DISCONNECTED = "ВЫ ПОКИНУЛИ ИГРУ!";
			TEXT_REMATCH = "хотите начать новый матч?";
			TEXT_WAIT_STRIKER = "ВАШ СОПЕРНИК БЬЕТ";
			TEXT_GET_READY = "ПРИГОТОВЬТЕСЬ!";
			TEXT_WAIT_GOALKEEPER = "ВАШ СОПЕРНИК ГОТОВ ОБОРОНЯТЬСЯ!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "Выберите никнейм";
			TEXT_SYS_UPDATE = "Обновить";
			TEXT_SYS_MATCH_LIST = "Список игр";
			TEXT_SYS_QUICKMATCH = "быстрая игра";
			TEXT_SYS_CREATEMATCH = "создать игру";
			TEXT_SYS_BACK = "назад";
			TEXT_SYS_OK = "ok";
			TEXT_SYS_CREATE = "создать";
			TEXT_SYS_CLOSE = "закрыть";
			TEXT_SYS_LOADING = "Загрузка...";
			TEXT_SYS_NAMEROOM = "Назовите игру";
			TEXT_SYS_CREATEROOM = "Создать игру";
			TEXT_SYS_DEFAULTROOMNAME = "Комната игрока %s";
			TEXT_SYS_PASSWORD = "Пароль";
			TEXT_SYS_INFOPASS = "Если вы не установите пароль, эта игра будет общедоступной.";
			TEXT_SYS_TYPEROOMPASS = "Введите пароль для игры";
			TEXT_WRONG_PASSWORD = "Неверный пароль!";
			TEXT_NETWORK_CONNECTING = "подключение...";
			TEXT_ROOM_IS_FULL = "Нет места!";
			TEXT_FIND_OPPONENT = "Поиск противника...";
			TEXT_CONNECT_TO_LOBBY = "Подключение...";
			TEXT_ROOM_DOESNT_EXIST = "Такой комнаты нет!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "Ожидание противника в комнате: ";
			TEXT_SYS_FINDROOM ="найти комнату...";
			TEXT_WAITING_ROOM_MESSAGE ="Максимум игроков в комнате: %d";
			TEXT_INVALID_NAME = "ОШИБКА ИМЕНИ!";
			
			TEXT_NO_CONNECTION = "НЕТ СОЕДИНЕНИЯ.<br/>Подключитесь, чтобы найти других игроков и начать игру.";
			TEXT_REMATCH_ALERT = "%s хочет сыграть еще раз";
			TEXT_SYS_INVITE ="ПРИГЛАСИТЬ"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Ссылка на игру скопирована в буфер обмена. Поделитесь ей со своими друзьями!"
			TEXT_PLAYER_KICKED ="Вас исключили из игры за неактивность."
			
			break;
		}
		case LANG_ES:{
			TEXT_PRELOADER_CONTINUE = "EMPEZAR";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "PUNTUACIÓN";
			TEXT_LEVEL_SCORE = "PUNTUACIÓN DE NIVEL";
			TEXT_TOTAL = "PUNTUACIÓN TOTAL";
			TEXT_GOAL = "¡GOL!";
			TEXT_ARE_SURE = "¿ESTÁS SEGURO DE QUE QUIERES SALIR DEL JUEGO?";
			TEXT_CONFIRM_DELETE = "¡SE ELIMINARÁN TODAS LAS PARADAS! ¿ESTÁS SEGURO?";
			TEXT_SAVED = "¡PARADA!";
			TEXT_MISSED = "¡FALLO!";
			TEXT_HELP = "DESLIZA PARA CHUTAR LA PELOTA";
			TEXT_HELP_KEEPER = "TOCA LA PANTALLA PARA DEJAR QUE EL OPONENTE CHUTE";
			TEXT_WIN = "HAS GANADO";
			TEXT_LOSE = "HAS PERDIDO";
			TEXT_CREDITS_DEVELOPED = "DESARROLLADO POR";
			TEXT_VS = "vs";
			TEXT_MATCH = "PARTIDO";
			TEXT_SELECT_TEAM = "SELECCIONA TU EQUIPO";
			TEXT_MATCHES = "PARTIDOS";
			TEXT_ERR_LS = "TU NAVEGADOR WEB NO ES COMPATIBLE CON EL ALMACENAMIENTO LOCAL. SI USAS SAFARI, PUEDE ESTAR RELACIONADO CON LA NAVEGACIÓN PRIVADA. COMO RESULTADO, ES POSIBLE QUE PARTE DE LA INFORMACIÓN NO SE GUARDE O QUE ALGUNAS FUNCIONES NO ESTÉN DISPONIBLES";

			TEXT_PLAYER = "JUGADOR";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "ESPERANDO OPONENTE...";
			TEXT_OPPONENT_LEFT = "¡EL OPONENTE SE FUE!";
			TEXT_PLAYER_DISCONNECTED = "¡TE HAS IDO!";
			TEXT_REMATCH = "¿quieres la revancha?";
			TEXT_WAIT_STRIKER = "TU OPONENTE ESTÁ CHUTANDO";
			TEXT_GET_READY = "¡PREPÁRATE!";
			TEXT_WAIT_GOALKEEPER = "¡TU OPONENTE ESTÁ LISTO PARA DEFENDER!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK ="Elige un apodo"
			TEXT_SYS_UPDATE ="actualizar"
			TEXT_SYS_MATCH_LIST ="Lista de partidas"
			TEXT_SYS_QUICKMATCH ="PARTIDA RÁPIDA"
			TEXT_SYS_CREATEMATCH ="CREAR PARTIDA"
			TEXT_SYS_BACK ="ATRÁS"
			TEXT_SYS_OK ="Aceptar"
			TEXT_SYS_CREATE ="CREAR"
			TEXT_SYS_CLOSE ="Cerrar"
			TEXT_SYS_LOADING ="CARGANDO"
			TEXT_SYS_NAMEROOM ="Nombre de sala"
			TEXT_SYS_CREATEROOM ="CREAR SALA";
			TEXT_SYS_PASSWORD ="Contraseña"
			TEXT_SYS_INFOPASS ="Esta sala será pública si no pones una contraseña."
			TEXT_SYS_TYPEROOMPASS ="ESCRIBE LA CONTRASEÑA DE LA SALA"
			
			TEXT_WRONG_PASSWORD = "¡Contraseña incorrecta!";
			TEXT_NETWORK_CONNECTING = "conectando...";
			TEXT_ROOM_IS_FULL = "¡La sala está llena!";
			TEXT_FIND_OPPONENT = "encontrando oponente...";
			TEXT_CONNECT_TO_LOBBY = "Conectar al lobby...";
			TEXT_ROOM_DOESNT_EXIST = "¡La sala no existe!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "esperando al oponente en la sala: ";
			TEXT_SYS_FINDROOM ="buscando una sala..."
			TEXT_SYS_DEFAULTROOMNAME ="Sala de %s";
			TEXT_WAITING_ROOM_MESSAGE ="En esta sala caben %d jugadores";
			TEXT_INVALID_NAME = "¡NOMBRE NO VÁLIDO!";
			
			TEXT_NO_CONNECTION = "SIN CONEXIÓN<br/>(Conéctate para jugar en línea con alguien)";
			TEXT_REMATCH_ALERT = "%s quiere jugar otra vez";
			TEXT_SYS_INVITE ="INVITAR"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Enlace de partida copiado al portapapeles. ¡Compártelo con tus amigos!"
			TEXT_PLAYER_KICKED ="Foste expulso do jogo devido a inatividade."
			
			break;
		}
		case LANG_FR:{
			TEXT_PRELOADER_CONTINUE = "DÉMARRER";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "SCORE";
			TEXT_LEVEL_SCORE = "SCORE DU NIVEAU";
			TEXT_TOTAL = "SCORE TOTAL";
			TEXT_GOAL = "BUT !";
			TEXT_ARE_SURE = "VOULEZ-VOUS VRAIMENT QUITTER LE JEU ?";
			TEXT_CONFIRM_DELETE = "TOUTE PROGRESSION SERA SUPPRIMÉE ! ÊTES-VOUS SÛR(E) ?";
			TEXT_SAVED = "SAUVEGARDÉ !";
			TEXT_MISSED = "MANQUÉ !";
			TEXT_HELP = "BALAYEZ POUR FRAPPER DANS LA BALLE";
			TEXT_HELP_KEEPER = "APPUYEZ SUR L’ÉCRAN POUR LAISSER L’ADVERSAIRE FRAPPER";
			TEXT_WIN = "VOUS AVEZ GAGNÉ";
			TEXT_LOSE = "VOUS AVEZ PERDU";
			TEXT_CREDITS_DEVELOPED = "DÉVELOPPÉ PAR";
			TEXT_VS = "VS";
			TEXT_MATCH = "MATCH";
			TEXT_SELECT_TEAM = "SÉLECTIONNEZ VOTRE ÉQUIPE";
			TEXT_MATCHES = "MATCHES";
			TEXT_ERR_LS = "VOTRE NAVIGATEUR WEB NE PREND PAS EN CHARGE LE STOCKAGE LOCAL. SI VOUS ÊTES SOUS SAFARI, CELA PEUT ÊTRE DÛ À LA NAVIGATION PRIVÉE. PAR CONSÉQUENT, CERTAINES INFORMATIONS PEUVENT NE PAS ÊTRE ENREGISTRÉES OU CERTAINES FONCTIONNALITÉS PEUVENT NE PAS ÊTRE DISPONIBLES";

			TEXT_PLAYER = "JOUEUR";
			TEXT_CPU = "ORDINATEUR";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "EN ATTENTE D’UN ADVERSAIRE...";
			TEXT_OPPONENT_LEFT = "L’ADVERSAIRE A QUITTÉ LA PARTIE !";
			TEXT_PLAYER_DISCONNECTED = "VOUS AVEZ QUITTÉ LA PARTIE !";
			TEXT_REMATCH = "voulez-vous faire une nouvelle partie ?";
			TEXT_WAIT_STRIKER = "VOTRE ADVERSAIRE VA FRAPPER";
			TEXT_GET_READY = "TENEZ-VOUS PRÊT !";
			TEXT_WAIT_GOALKEEPER = "VOTRE ADVERSAIRE EST PRÊT À ARRÊTER LA FRAPPE !";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK ="Choisissez un pseudo"
			TEXT_SYS_UPDATE ="mise à jour"
			TEXT_SYS_MATCH_LIST ="Liste des parties"
			TEXT_SYS_QUICKMATCH ="partie rapide"
			TEXT_SYS_CREATEMATCH ="créer une partie"
			TEXT_SYS_BACK ="retour"
			TEXT_SYS_OK ="ok"
			TEXT_SYS_CREATE ="créer"
			TEXT_SYS_CLOSE ="fermer"
			TEXT_SYS_LOADING ="Chargement"
			TEXT_SYS_NAMEROOM ="Nom de la chambre"
			TEXT_SYS_CREATEROOM ="Créer une salle"
			TEXT_SYS_PASSWORD ="Mot de passe"
			TEXT_SYS_INFOPASS ="Si vous ne créez pas de mot de passe, cette salle sera publique."
			TEXT_SYS_TYPEROOMPASS ="Saisissez le mot de passe"
			TEXT_WRONG_PASSWORD ="Mot de passe incorrect"
			TEXT_NETWORK_CONNECTING ="connexion en cours"
			TEXT_ROOM_IS_FULL ="La salle est complète !"
			TEXT_FIND_OPPONENT = "en recherche d’un adversaire...";
			TEXT_CONNECT_TO_LOBBY = "Connexion au lobby...";
			TEXT_ROOM_DOESNT_EXIST = "La salle n’existe pas !";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "en attente d’un adversaire dans la salle : ";
			TEXT_SYS_FINDROOM ="trouver une salle...";
			TEXT_SYS_DEFAULTROOMNAME ="Salle créée par %s";
			TEXT_WAITING_ROOM_MESSAGE ="Cette salle peut accueillir %d joueurs au maximum";
			TEXT_INVALID_NAME = "NOM INVALIDE !";
			
			TEXT_NO_CONNECTION = "HORS CONNEXION<br/>(Connectez-vous pour trouver des joueurs en ligne)";
			TEXT_REMATCH_ALERT = "%s voudrait refaire une partie";
			TEXT_SYS_INVITE ="INVITER"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Le lien du jeu a été copié dans votre Presse-papiers. Envoyez-le à vos amis !"	
			TEXT_PLAYER_KICKED ="Votre inactivité a entraîné votre expulsion de la partie."
			
			break;
		}
		case LANG_DE:{
			TEXT_PRELOADER_CONTINUE = "START";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "PUNKTZAHL";
			TEXT_LEVEL_SCORE = "LEVEL-PUNKTZAHL";
			TEXT_TOTAL = "GESAMTPUNKTZAHL";
			TEXT_GOAL = "ZIEL!";
			TEXT_ARE_SURE = "WILLST DU DAS SPIEL WIRKLICH VERLASSEN?";
			TEXT_CONFIRM_DELETE = "ALLE SPEICHERSTÄNDE WERDEN GELÖSCHT! BIST DU DIR SICHER?";
			TEXT_SAVED = "ABGEWEHRT!";
			TEXT_MISSED = "VERPASST!";
			TEXT_HELP = "WISCHE, UM DEN BALL ZU KICKEN";
			TEXT_HELP_KEEPER = "TIPPE DEN BILDSCHIRM AN, UM DEN GEGNER KICKEN ZU LASSEN";
			TEXT_WIN = "DU HAST GEWONNEN";
			TEXT_LOSE = "DU HAST VERLOREN";
			TEXT_CREDITS_DEVELOPED = "ENTWICKELT VON";
			TEXT_VS = "VS";
			TEXT_MATCH = "MATCH";
			TEXT_SELECT_TEAM = "WÄHLE DEIN TEAM";
			TEXT_MATCHES = "MATCHE";
			TEXT_ERR_LS = "DEIN WEBBROWSER UNTERSTÜTZT NICHT DIE LOKALE SPEICHERUNG. WENN DU SAFARI VERWENDEST, KANN DIES MIT DEM MODUS PRIVATES SURFEN ZUSAMMENHÄNGEN. DADURCH IST ES MÖGLICH, DASS EINIGE INFORMATIONEN NICHT GESPEICHERT WERDEN ODER DASS EINIGE FUNKTIONEN NICHT VERFÜGBAR SIND.";

			TEXT_PLAYER = "SPIELER";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "WARTENDER GEGNER ...";
			TEXT_OPPONENT_LEFT = "GEGNER HAT DAS SPIEL VERLASSEN!";
			TEXT_PLAYER_DISCONNECTED = "DU HAST DAS SPIEL VERLASSEN!";
			TEXT_REMATCH = "Willst du das Spiel wiederholen?";
			TEXT_WAIT_STRIKER = "DEIN GEGNER KICKT";
			TEXT_GET_READY = "MACH DICH BEREIT!";
			TEXT_WAIT_GOALKEEPER = "DEIN GEGNER IST BEREIT ZUR ABWEHR!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK ="Spitzname wählen"
			TEXT_SYS_UPDATE ="aktualisieren"
			TEXT_SYS_MATCH_LIST ="MATCH-LISTE"
			TEXT_SYS_QUICKMATCH ="SCHNELLES MATCH"
			TEXT_SYS_CREATEMATCH ="MATCH ERSTELLEN"
			TEXT_SYS_BACK ="ZURÜCK"
			TEXT_SYS_OK ="ok"
			TEXT_SYS_CREATE ="ERSTELLEN"
			TEXT_SYS_CLOSE ="schließen"
			TEXT_SYS_LOADING ="Laden"
			TEXT_SYS_NAMEROOM ="Raum benennen"
			TEXT_SYS_CREATEROOM ="RAUM ERSTELLEN"
			TEXT_SYS_PASSWORD ="PASSWORT"
			TEXT_SYS_INFOPASS ="Wenn du kein Passwort festlegst, wird dieser Raum öffentlich sein."
			TEXT_SYS_TYPEROOMPASS ="Raum-Passwort eingeben"
			TEXT_WRONG_PASSWORD = "Falsches Passwort!";
			TEXT_NETWORK_CONNECTING = "Verbinde ...";
			TEXT_ROOM_IS_FULL = "Zimmer ist voll!";
			TEXT_FIND_OPPONENT = "Suche Gegner ...";
			TEXT_CONNECT_TO_LOBBY = "Verbinde mit Lobby ...";
			TEXT_ROOM_DOESNT_EXIST = "Zimmer existiert nicht!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "Warten auf Gegner im Zimmer: ";
			TEXT_SYS_FINDROOM ="einen Raum finden ...";
			TEXT_SYS_DEFAULTROOMNAME ="Raum von %s";
			TEXT_WAITING_ROOM_MESSAGE ="Dieser Raum ist für maximal %d Spieler";
			TEXT_INVALID_NAME = "UNGÜLTIGER NAME!";
			
			TEXT_NO_CONNECTION = "KEINE VERBINDUNG<br/>(Bitte Verbindung herstellen, um Online-Spielpartner zu finden)";
			TEXT_REMATCH_ALERT = "%s möchte nochmal spielen";
			TEXT_SYS_INVITE ="EINLADEN"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Spiel-Link wurde in deine Zwischenablage kopiert. Teile ihn mit deinen Freunden!"
			TEXT_PLAYER_KICKED ="Du wurdest wegen Inaktivität aus dem Spiel geworfen."
			
			break;
		}
		case LANG_PT:{
			TEXT_PRELOADER_CONTINUE = "COMEÇAR";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "PONTUAÇÃO";
			TEXT_LEVEL_SCORE = "PONTUAÇÃO DE NÍVEL";
			TEXT_TOTAL = "PONTUAÇÃO TOTAL";
			TEXT_GOAL = "GOLO!";
			TEXT_ARE_SURE = "TENS A CERTEZA DE QUE QUERES SAIR DO JOGO?";
			TEXT_CONFIRM_DELETE = "TUDO O QUE FOI DEFENDIDO SERÁ ELIMINADO! TENS CERTEZA?";
			TEXT_SAVED = "DEFENDEU!";
			TEXT_MISSED = "FALHO!";
			TEXT_HELP = "DESLIZA PARA CHUTAR A BOLA";
			TEXT_HELP_KEEPER = "TOCA NO ECRÃ PARA DEIXAR O ADVERSÁRIO CHUTAR";
			TEXT_WIN = "GANHASTE";
			TEXT_LOSE = "PERDESTE";
			TEXT_CREDITS_DEVELOPED = "DESENVOLVIDO POR";
			TEXT_VS = "VS";
			TEXT_MATCH = "JOGO";
			TEXT_SELECT_TEAM = "SELECCIONA A TUA EQUIPA";
			TEXT_MATCHES = "JOGOS";
			TEXT_ERR_LS = "O TEU NAVEGADOR WEB NÃO SUPORTA ARMAZENAMENTO LOCAL. SE ESTIVERES A UTILIZAR SAFARI, PODE ESTAR RELACIONADO COM A NAVEGAÇÃO PRIVADA. COMO RESULTADO, ALGUMAS INFORMAÇÕES PODEM NÃO SER GUARDADAS OU ALGUMAS CARACTERÍSTICAS PODEM NÃO ESTAR DISPONÍVEIS";

			TEXT_PLAYER = "JOGADOR";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "A AGUARDAR PELO ADVERSÁRIO...";
			TEXT_OPPONENT_LEFT = "O ADVERSÁRIO FOI EMBORA!";
			TEXT_PLAYER_DISCONNECTED = "FOSTE-TE EMBORA!";
			TEXT_REMATCH = "queres a desforra?";
			TEXT_WAIT_STRIKER = "O TEU OPONENTE ESTÁ A CHUTAR";
			TEXT_GET_READY = "PREPARA-TE!";
			TEXT_WAIT_GOALKEEPER = "O TEU OPONENTE ESTÁ PRONTO PARA DEFENDER!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK ="ESCOLHA UM APELIDO"
			TEXT_SYS_UPDATE ="atualizar"
			TEXT_SYS_MATCH_LIST ="Lista de partidas"
			TEXT_SYS_QUICKMATCH ="PARTIDA RÁPIDA"
			TEXT_SYS_CREATEMATCH ="CRIAR PARTIDA"
			TEXT_SYS_BACK ="VOLTAR"
			TEXT_SYS_OK ="ok"
			TEXT_SYS_CREATE ="criar"
			TEXT_SYS_CLOSE ="FECHAR"
			TEXT_SYS_LOADING ="CARREGANDO"
			TEXT_SYS_NAMEROOM ="Nomear sala"
			TEXT_SYS_CREATEROOM ="CRIAR SALA"
			TEXT_SYS_PASSWORD ="SENHA"
			TEXT_SYS_INFOPASS ="Se você não definir uma senha, esta sala será pública."
			TEXT_SYS_TYPEROOMPASS ="Digite a senha da sala"
			TEXT_WRONG_PASSWORD = "Senha errada!";
			TEXT_NETWORK_CONNECTING = "a conectar...";
			TEXT_ROOM_IS_FULL = "A sala está cheia!";
			TEXT_FIND_OPPONENT = "a encontrar adversário...";
			TEXT_CONNECT_TO_LOBBY = "Conectar com o lobby...";
			TEXT_ROOM_DOESNT_EXIST = "A sala não existe!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "a aguardar pelo adversário na sala: ";
			TEXT_SYS_FINDROOM ="encontrar uma sala...";
			TEXT_SYS_DEFAULTROOMNAME ="Sala de %s";
			TEXT_WAITING_ROOM_MESSAGE ="Esta sala pode conter até %d jogadores";
			TEXT_INVALID_NAME = "NOME INVÁLIDO!";
			
			TEXT_NO_CONNECTION = "SEM LIGAÇÃO<br/>(Liga-te para encontrares um adversário online)";
			TEXT_REMATCH_ALERT = "%s quer jogar outra vez";
			TEXT_SYS_INVITE ="CONVIDAR"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Ligação do jogo copiada para a tua área de transferências. Partilha-a com os amigos!"
			TEXT_PLAYER_KICKED ="Se te ha expulsado de la partida por inactividad."
				
			break;
		}
		case LANG_IT:{
			TEXT_PRELOADER_CONTINUE = "INIZIA";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "PUNTEGGIO";
			TEXT_LEVEL_SCORE = "PUNTEGGIO LIVELLO";
			TEXT_TOTAL = "PUNTEGGIO TOTALE";
			TEXT_GOAL = "GOAL!";
			TEXT_ARE_SURE = "SEI SICURO DI VOLER USCIRE DAL GIOCO?";
			TEXT_CONFIRM_DELETE = "TUTTI I SALVATAGGI SARANNO CANCELLATI! SICURO?";
			TEXT_SAVED = "PARATA!";
			TEXT_MISSED = "MANCATO!";
			TEXT_HELP = "TRASCINA PER CALCIARE LA PALLA";
			TEXT_HELP_KEEPER = "TOCCA LO SCHERMO PER LASCIARE CHE L'AVVERSARIO CALCI";
			TEXT_WIN = "HAI VINTO";
			TEXT_LOSE = "HAI PERSO";
			TEXT_CREDITS_DEVELOPED = "SVILUPPATO DA";
			TEXT_VS = "VS";
			TEXT_MATCH = "PARTITA";
			TEXT_SELECT_TEAM = "SELEZIONA LA TUA SQUADRA";
			TEXT_MATCHES = "PARTITE";
			TEXT_ERR_LS = "IL BROWSER WEB NON SUPPORTA L'ARCHIVIAZIONE LOCALE. SE STAI USANDO SAFARI, CIÒ POTREBBE ESSERE CORRELATO ALLA NAVIGAZIONE PRIVATA. DI CONSEGUENZA, ALCUNE INFORMAZIONI POTREBBERO NON ESSERE SALVATE O ALCUNE FUNZIONALITÀ POTREBBERO NON ESSERE DISPONIBILI";

			TEXT_PLAYER = "GIOCATORE";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EXTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "IN ATTESA DELL'AVVERSARIO...";
			TEXT_OPPONENT_LEFT = "L'AVVERSARIO HA ABBANDONATO!";
			TEXT_PLAYER_DISCONNECTED = "HAI ABBANDONATO!";
			TEXT_REMATCH = "vuoi la rivincita?";
			TEXT_WAIT_STRIKER = "IL TUO AVVERSARIO STA CALCIANDO";
			TEXT_GET_READY = "PREPARATI!";
			TEXT_WAIT_GOALKEEPER = "IL TUO AVVERSARIO È PRONTO A PARARE!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK ="Scegli un nickname"
			TEXT_SYS_UPDATE ="aggiorna"
			TEXT_SYS_MATCH_LIST ="Lista Partite"
			TEXT_SYS_QUICKMATCH ="Partita Veloce"
			TEXT_SYS_CREATEMATCH ="Crea Match"
			TEXT_SYS_BACK ="Indietro"
			TEXT_SYS_OK ="ok"
			TEXT_SYS_CREATE ="Crea"
			TEXT_SYS_CLOSE ="Chiudi"
			TEXT_SYS_LOADING ="Caricamento"
			TEXT_SYS_NAMEROOM ="Nome della Stanza"
			TEXT_SYS_CREATEROOM ="Crea una stanza"
			TEXT_SYS_PASSWORD ="Password"
			TEXT_SYS_INFOPASS ="Se non imposti una password la stanza sarà pubblica"
			TEXT_SYS_TYPEROOMPASS ="Digita la password della stanza"
			TEXT_WRONG_PASSWORD = "Password errata!";
			TEXT_NETWORK_CONNECTING = "collegamento...";
			TEXT_ROOM_IS_FULL = "La stanza è piena!";
			TEXT_FIND_OPPONENT = "ricerca avversario...";
			TEXT_CONNECT_TO_LOBBY = "Connessione alla lobby...";
			TEXT_ROOM_DOESNT_EXIST = "La stanza non esiste!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "in attesa di avversario nella stanza: ";
			TEXT_SYS_FINDROOM ="Trova una stanza...";
			TEXT_SYS_DEFAULTROOMNAME ="Stanza di %s ";
			TEXT_WAITING_ROOM_MESSAGE ="Questa stanza può contenere al massimo %d giocatori";
			TEXT_INVALID_NAME = "NOME NON VALIDO!";
			
			TEXT_NO_CONNECTION = "NESSUNA CONNESSIONE<br/>(Connettiti per trovare qualcuno con cui giocare online)";
			TEXT_REMATCH_ALERT = "%s VUOLE RIGIOCARE!"
			TEXT_SYS_INVITE ="INVITA"
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Link di gioco copiato tra i tuoi appunti. Condividilo con i tuoi amici!"
			TEXT_PLAYER_KICKED ="Sei uscito dal gioco per inattività."
			
			break;
		}
		case LANG_TR:{
			TEXT_PRELOADER_CONTINUE = "BAŞLA";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "SKOR";
			TEXT_LEVEL_SCORE = "SEVİYE PUANI";
			TEXT_TOTAL = "TOPLAM PUAN";
			TEXT_GOAL = "GOL!";
			TEXT_ARE_SURE = "OYUNDAN ÇIKMAK İSTEDİĞİNE EMİN MİSİN?";
			TEXT_CONFIRM_DELETE = "TÜM KAYITLAR SİLİNECEKTİR! EMİN MİSİN?";
			TEXT_SAVED = "KAYDEDİLDİ!";
			TEXT_MISSED = "KAÇTI!";
			TEXT_HELP = "TOPA VURMAK İÇİN KAYDIR";
			TEXT_HELP_KEEPER = "RAKİBİN VURMASINA İZİN VERMEK İÇİN EKRANA DOKUN";
			TEXT_WIN = "KAZANDIN";
			TEXT_LOSE = "KAYBETTİN";
			TEXT_CREDITS_DEVELOPED = "GELİŞTİREN:";
			TEXT_VS = "VS";
			TEXT_MATCH = "MAÇ";
			TEXT_SELECT_TEAM = "TAKIMINI SEÇ";
			TEXT_MATCHES = "MAÇLAR";
			TEXT_ERR_LS = "WEB TARAYICIN YEREL DEPOLAMAYI DESTEKLEMİYOR. SAFARİ KULLANIYORSAN, GİZLİ MODDA TARAMAYLA İLGİLİ OLABİLİR. SONUÇ OLARAK BAZI BİLGİLER KAYDEDİLEMEYEBİLİR VEYA BAZI ÖZELLİKLER KULLANILAMAYABİLİR";

			TEXT_PLAYER = "OYUNCU";
			TEXT_CPU = "İŞLEMCİ";
			TEXT_EXTRA = "EKSTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "RAKİP BEKLENİYOR...";
			TEXT_OPPONENT_LEFT = "RAKİP TERK ETTİ!";
			TEXT_PLAYER_DISCONNECTED = "TERK ETTİN!";
			TEXT_REMATCH = "Yeniden maç yapmak ister misin?";
			TEXT_WAIT_STRIKER = "RAKİBİN VURUŞ YAPIYOR";
			TEXT_GET_READY = "HAZIRLAN!";
			TEXT_WAIT_GOALKEEPER = "RAKİBİN KAYDETMEYE HAZIR!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "Kullanıcı adı seç";
			TEXT_SYS_UPDATE = "Güncelleme";
			TEXT_SYS_MATCH_LIST = "Maç listesi";
			TEXT_SYS_QUICKMATCH = "Hızlı maç";
			TEXT_SYS_CREATEMATCH = "eşleşme oluştur";
			TEXT_SYS_BACK = "geri";
			TEXT_SYS_OK = "tamam";
			TEXT_SYS_CREATE = "oluşturmak";
			TEXT_SYS_CLOSE = "kapat";
			TEXT_SYS_LOADING = "Yükleniyor...";
			TEXT_SYS_NAMEROOM = "Oda ismi";
			TEXT_SYS_CREATEROOM = "Oda yarat";
			TEXT_SYS_PASSWORD = "Parola";
			TEXT_SYS_INFOPASS = "Bir şifre belirlemezseniz bu oda herkese açık olacaktır.";
			TEXT_SYS_TYPEROOMPASS = "Oda Şifresini Yazın";
			TEXT_WRONG_PASSWORD = "Yanlış Şifre!";
			TEXT_NETWORK_CONNECTING = "bağlanıyor...";
			TEXT_ROOM_IS_FULL = "Oda dolu!";
			TEXT_FIND_OPPONENT = "rakip bulunuyor...";
			TEXT_CONNECT_TO_LOBBY = "Lobiye bağlan...";
			TEXT_ROOM_DOESNT_EXIST = "Oda yok!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "odada rakip bekleniyor: ";
			TEXT_SYS_FINDROOM ="oda bul...";
			TEXT_SYS_DEFAULTROOMNAME ="%s'in odası";
			TEXT_WAITING_ROOM_MESSAGE ="Bu oda en fazla %d oyuncu alabilir";
			
			TEXT_NO_CONNECTION ="BAĞLANTI YOK<br/> (Çevrimiçi oynayacak birini bulmak için bağlan)";
			TEXT_REMATCH_ALERT = "%s TEKRAR OYNAMAK İSTİYOR";
			TEXT_SYS_INVITE ="DAVET ET";
			TEXT_SYS_COPIED_TO_CLIPBOARD ="Oyun bağlantısı panoya kopyalandı. Arkadaşlarınla paylaş!"	
			TEXT_PLAYER_KICKED ="Eylemsizlik yüzünden oyundan atıldın."
			
			break;
		}
		case LANG_AR:{
			TEXT_PRELOADER_CONTINUE = "البدء";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "النتيجة";
			TEXT_LEVEL_SCORE = "مستوى النتيجة";
			TEXT_TOTAL = "إجمالي النتيجة";
			TEXT_GOAL = "الهدف!";
			TEXT_ARE_SURE = "هل ترغب بالتأكيد في الخروج من اللعبة؟";
			TEXT_CONFIRM_DELETE = "سيتم حذف جميع ما تم حفظه! هل أنت متأكد؟";
			TEXT_SAVED = "تم الحفظ!";
			TEXT_MISSED = "مفقود!";
			TEXT_HELP = "اسحب لركل الكرة";
			TEXT_HELP_KEEPER = "انقر فوق الشاشة لجعل الخصم يركل الكرة";
			TEXT_WIN = "لقد فزت";
			TEXT_LOSE = "لقد خسرت";
			TEXT_CREDITS_DEVELOPED = "تم تطويرها من قِبل";
			TEXT_VS = "ضد";
			TEXT_MATCH = "مباراة";
			TEXT_SELECT_TEAM = "حدد فريقك";
			TEXT_MATCHES = "مباريات";
			TEXT_ERR_LS = "لا يدعم متصفح الويب الخاص بك التخزين المحلي. إذا كنت تستخدم متصفح SAFARI، فقد يكون مرتبطًا بالتصفح الخاص. ونتيجة لذلك، قد لا يتم حفظ بعض المعلومات أو قد لا تتوفر بعض الميزات";

			TEXT_PLAYER = "اللاعب";
			TEXT_CPU = "وحدة المعالجة المركزية (CPU)";
			TEXT_EXTRA = "إضافي";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "جارٍ انتظار الخصم...";
			TEXT_OPPONENT_LEFT = "لقد غادر الخصم!";
			TEXT_PLAYER_DISCONNECTED = "لقد غادرت!";
			TEXT_REMATCH = "هل تريد إعادة المباراة؟";
			TEXT_WAIT_STRIKER = "يركل خصمك الكرة";
			TEXT_GET_READY = "استعد!";
			TEXT_WAIT_GOALKEEPER = "خصمك مستعد للحفظ!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "اختر اسمًا مستعارًا";
			TEXT_SYS_UPDATE = "تحديث";
			TEXT_SYS_MATCH_LIST = "قائمة المباريات";
			TEXT_SYS_QUICKMATCH = "مباراة سريعة";
			TEXT_SYS_CREATEMATCH = "إنشاء مباراة";
			TEXT_SYS_BACK = "عودة";
			TEXT_SYS_OK = "موافق";
			TEXT_SYS_CREATE = "إنشاء";
			TEXT_SYS_CLOSE = "إغلاق";
			TEXT_SYS_LOADING = "جارِ التحميل";
			TEXT_SYS_NAMEROOM = "تسمية الغرفة";
			TEXT_SYS_CREATEROOM = "إنشاء غرفة";
			TEXT_SYS_PASSWORD = "كلمة المرور";
			TEXT_SYS_INFOPASS = "إذا لم تقم بتعيين كلمة المرور، فستكون الغرفة متاحة للجميع";
			TEXT_SYS_TYPEROOMPASS = "اكتب كلمة المرور المخصصة للغرفة";
			TEXT_WRONG_PASSWORD = "كلمة المرور خاطئة!";
			TEXT_NETWORK_CONNECTING = "جارِ الاتصال...";
			TEXT_ROOM_IS_FULL = "الغرفة ممتلئة!";
			TEXT_FIND_OPPONENT = "جارِ البحث عن خصم...";
			TEXT_CONNECT_TO_LOBBY = "الاتصال بساحة الانتظار...";
			TEXT_ROOM_DOESNT_EXIST = "الغرفة غير موجودة!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "جارِ انتظار الخصم في الغرفة: ";
			TEXT_SYS_FINDROOM = "جارٍ البحث عن غرفة...";
			TEXT_SYS_DEFAULTROOMNAME = "%s غرفة";
			TEXT_WAITING_ROOM_MESSAGE = "يمكن أن تحتوي الغرفة على حد أقصي %من اللاعبين";
			
			TEXT_NO_CONNECTION = "لا يوجد اتصال بالإنترنت (اتصل بالإنترنت للعثور على شخص ما للعب عبر الإنترنت)";
			TEXT_REMATCH_ALERT = "%يرغب اللاعب %s في اللعب مرة أخرى";
			TEXT_SYS_INVITE = "دعوة";
			TEXT_SYS_COPIED_TO_CLIPBOARD = 'نسخ رابط اللعبة إلى الحافظة. مشاركة اللعبة مع أصدقائك!';
			TEXT_PLAYER_KICKED = "تم طردك من اللعبة بسبب عدم وجود نشاط لك."; 
			
			break;
		}
		case LANG_HI:{
			TEXT_PRELOADER_CONTINUE = "शुरू करें";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "स्कोर";
			TEXT_LEVEL_SCORE = "लेवल स्कोर";
			TEXT_TOTAL = "कुल स्कोर";
			TEXT_GOAL = "लक्ष्य!";
			TEXT_ARE_SURE = "क्या आप वाकई गेम से बाहर निकलना चाहते हैं?";
			TEXT_CONFIRM_DELETE = "सभी सेव की गई चीज़ें हट जाएंगी! क्या आपको यकीन है?";
			TEXT_SAVED = "सेव हो गया है!";
			TEXT_MISSED = "चूक गए हैं!";
			TEXT_HELP = "बॉल को किक मारने के लिए स्वाइप करें";
			TEXT_HELP_KEEPER = "दुश्मन को किक मारने के लिए स्क्रीन पर टैप करें";
			TEXT_WIN = "आप जीत गए";
			TEXT_LOSE = "आप हार गए";
			TEXT_CREDITS_DEVELOPED = "द्वारा विकसित किया गया है";
			TEXT_VS = "बनाम";
			TEXT_MATCH = "मैच";
			TEXT_SELECT_TEAM = "अपनी टीम चुनें";
			TEXT_MATCHES = "मैच";
			TEXT_ERR_LS = "आपका वेब ब्राउज़र स्थानीय स्टोरेज को सपोर्ट नहीं करता है. यदि आप SAFARI का इस्तेमाल कर रहे हैं, तो यह प्राइवेट ब्राउज़िंग से संबंधित हो सकता है. परिणामस्वरूप, कुछ जानकारी सेव नहीं जा सकती है या कुछ फ़ीचर्स उपलब्ध नहीं हो सकते हैं";

			TEXT_PLAYER = "खिलाड़ी";
			TEXT_CPU = "सीपीयू";
			TEXT_EXTRA = "अतिरिक्त";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "दुश्मन का इंतज़ार...";
			TEXT_OPPONENT_LEFT = "दुश्मन ने छोड़ दिया!";
			TEXT_PLAYER_DISCONNECTED = "आपने छोड़ दिया!";
			TEXT_REMATCH = "क्या आप दोबारा मैच खेलना चाहते हैं?";
			TEXT_WAIT_STRIKER = "आपका दुश्मन किक मार रहा है";
			TEXT_GET_READY = "तैयार हो जाएं!";
			TEXT_WAIT_GOALKEEPER = "आपका दुश्मन सहेजने के लिए तैयार है!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "उपनाम चुनें";
			TEXT_SYS_UPDATE = "अपडेट करें";
			TEXT_SYS_MATCH_LIST = "मैच सूची";
			TEXT_SYS_QUICKMATCH = "क्विक मैच";
			TEXT_SYS_CREATEMATCH = "मैच बनाएं";
			TEXT_SYS_BACK = "पीछे";
			TEXT_SYS_OK = "ठीक है";
			TEXT_SYS_CREATE = "बनाएं";
			TEXT_SYS_CLOSE = "बंद करें";
			TEXT_SYS_LOADING = "लोड हो रहा है";
			TEXT_SYS_NAMEROOM = "रूम को नाम दें";
			TEXT_SYS_CREATEROOM = "रूम बनाएं";
			TEXT_SYS_PASSWORD = "पासवर्ड";
			TEXT_SYS_INFOPASS = "अगर आप पासवर्ड सेट नहीं करते हैं तो यह रूम पब्लिक हो जाएगा.";
			TEXT_SYS_TYPEROOMPASS = "रूम पासवर्ड टाइप करें";
			TEXT_WRONG_PASSWORD = "गलत पासवर्ड!";
			TEXT_NETWORK_CONNECTING = "कनेक्ट हो रहा है...";
			TEXT_ROOM_IS_FULL = "रूम भर गया है!";
			TEXT_FIND_OPPONENT = "दुश्मन को ढूँढ रहे हैं...";
			TEXT_CONNECT_TO_LOBBY = "लॉबी से जुड़ें...";
			TEXT_ROOM_DOESNT_EXIST = "रूम मौजूद नहीं है!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "रूम में दुश्मन का इंतज़ार कर रहे हैं: ";
			TEXT_SYS_FINDROOM = "एक रूम खोजें...";
			TEXT_SYS_DEFAULTROOMNAME = "%s का रूम";
			TEXT_WAITING_ROOM_MESSAGE = "इस रूम में अधिकतम %d खिलाड़ी हो सकते हैं";
			
			TEXT_NO_CONNECTION = "कोई कनेक्शन नहीं (ऑनलाइन खेलने के लिए किसी को खोजने के लिए कनेक्ट करें)";
			TEXT_REMATCH_ALERT = "%s फिर से खेलना चाहता है";
			TEXT_SYS_INVITE = "आमंत्रित करें";
			TEXT_SYS_COPIED_TO_CLIPBOARD = 'गेम लिंक आपके क्लिपबोर्ड पर कॉपी किया गया. इसे अपने दोस्तों के साथ शेयर करें!';
			TEXT_PLAYER_KICKED = "निष्क्रियता के कारण आपको गेम से निकाल दिया गया था."; 
			
			break;
		}
		case LANG_ID:{
			TEXT_PRELOADER_CONTINUE = "MULAI";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "SKOR";
			TEXT_LEVEL_SCORE = "SKOR LEVEL";
			TEXT_TOTAL = "SKOR TOTAL";
			TEXT_GOAL = "GOL!";
			TEXT_ARE_SURE = "KAMU YAKIN INGIN KELUAR DARI GAME?";
			TEXT_CONFIRM_DELETE = "SEMUA PENYIMPANAN AKAN DIHAPUS! APAKAH KAMU YAKIN?";
			TEXT_SAVED = "DISIMPAN!";
			TEXT_MISSED = "MELESET!";
			TEXT_HELP = "GESER UNTUK MENENDANG BOLA";
			TEXT_HELP_KEEPER = "KETUK LAYAR UNTUK MEMBIARKAN MUSUH MENENDANG";
			TEXT_WIN = "KAMU MENANG";
			TEXT_LOSE = "KAMU KALAH";
			TEXT_CREDITS_DEVELOPED = "DIKEMBANGKAN OLEH";
			TEXT_VS = "VS";
			TEXT_MATCH = "PERTANDINGAN";
			TEXT_SELECT_TEAM = "PILIH TIM";
			TEXT_MATCHES = "PERTANDINGAN";
			TEXT_ERR_LS = "BROWSER WEB TIDAK MENDUKUNG PENYIMPANAN LOKAL. JIKA KAMU MENGGUNAKAN SAFARI, HAL INI MUNGKIN DISEBABKAN OLEH PENELUSURAN PRIVAT. AKIBATNYA, BEBERAPA INFORMASI TIDAK DISIMPAN ATAU BEBERAPA FITUR TIDAK TERSEDIA";

			TEXT_PLAYER = "PEMAIN";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "EKSTRA";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "MENUNGGU LAWAN...";
			TEXT_OPPONENT_LEFT = "LAWAN MENINGGALKAN PERTANDINGAN!";
			TEXT_PLAYER_DISCONNECTED = "KAMU MENINGGALKAN PERTANDINGAN!";
			TEXT_REMATCH = "kamu ingin bertanding ulang?";
			TEXT_WAIT_STRIKER = "LAWAN MENENDANG";
			TEXT_GET_READY = "SIAP-SIAP!";
			TEXT_WAIT_GOALKEEPER = "LAWAN BERSIAP MENYELAMATKAN GAWANG!";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "Pilih nama panggilan";
			TEXT_SYS_UPDATE = "perbarui";
			TEXT_SYS_MATCH_LIST = "Daftar pertandingan";
			TEXT_SYS_QUICKMATCH = "pertandingan singkat";
			TEXT_SYS_CREATEMATCH = "buat pertandingan";
			TEXT_SYS_BACK = "kembali";
			TEXT_SYS_OK = "oke";
			TEXT_SYS_CREATE = "buat";
			TEXT_SYS_CLOSE = "tutup";
			TEXT_SYS_LOADING = "Memuat";
			TEXT_SYS_NAMEROOM = "Beri Nama Kamar";
			TEXT_SYS_CREATEROOM = "Buat Kamar";
			TEXT_SYS_PASSWORD = "Kata sandi";
			TEXT_SYS_INFOPASS = "Kalau kamu tidak mengatur kata sandi, kamar ini akan menjadi publik.";
			TEXT_SYS_TYPEROOMPASS = "Ketik Kata Sandi Kamar";
			TEXT_WRONG_PASSWORD = "Kata Sandi Salah!";
			TEXT_NETWORK_CONNECTING = "menyambungkan...";
			TEXT_ROOM_IS_FULL = "Ruangan penuh!";
			TEXT_FIND_OPPONENT = "mencari lawan...";
			TEXT_CONNECT_TO_LOBBY = "Menyambungkan ke lobi...";
			TEXT_ROOM_DOESNT_EXIST = "Ruangan tidak ada!";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "menunggu lawan di ruangan: ";
			TEXT_SYS_FINDROOM = "temukan kamar...";
			TEXT_SYS_DEFAULTROOMNAME = "%s kamar";
			TEXT_WAITING_ROOM_MESSAGE = "Kamar ini bisa diisi maks. %d pemain";
			
			TEXT_NO_CONNECTION = "TIDAK ADA KONEKSI (Sambungkan untuk menemukan lawan online)";
			TEXT_REMATCH_ALERT = "%s INGIN BERMAIN LAGI";
			TEXT_SYS_INVITE = "UNDANG";
			TEXT_SYS_COPIED_TO_CLIPBOARD = 'Tautan game disalin ke Clipboard. Bagikan ke teman-temanmu!';
			TEXT_PLAYER_KICKED = "Kamu dikeluarkan dari game karena tidak aktif.";
			
			break;
		}
		case LANG_JA:{
			TEXT_PRELOADER_CONTINUE = "スタート";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "スコア";
			TEXT_LEVEL_SCORE = "レベルスコア";
			TEXT_TOTAL = "合計スコア";
			TEXT_GOAL = "ゴール！";
			TEXT_ARE_SURE = "ゲームを終了しますか？";
			TEXT_CONFIRM_DELETE = "すべての保存データは削除されます！よろしいですか？";
			TEXT_SAVED = "守りました！";
			TEXT_MISSED = "失敗！";
			TEXT_HELP = "スワイプでボールをキック";
			TEXT_HELP_KEEPER = "画面をタップすると対戦相手がキック";
			TEXT_WIN = "勝ちました";
			TEXT_LOSE = "負けました";
			TEXT_CREDITS_DEVELOPED = "開発元：";
			TEXT_VS = "対";
			TEXT_MATCH = "対戦";
			TEXT_SELECT_TEAM = "チームを選択";
			TEXT_MATCHES = "対戦";
			TEXT_ERR_LS = "お使いのWEBブラウザーはローカル保存に対応していません。SAFARIを使用している場合はプライベートブラウズが原因かもしれません。その結果、一部の情報が保存されないか、一部の機能が使用できない可能性があります";

			TEXT_PLAYER = "プレイヤー";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "追加";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "対戦相手を待機中...";
			TEXT_OPPONENT_LEFT = "対戦相手が退出しました！";
			TEXT_PLAYER_DISCONNECTED = "あなたは退出しました！";
			TEXT_REMATCH = "もう一度対戦しますか？";
			TEXT_WAIT_STRIKER = "対戦相手がキックしています";
			TEXT_GET_READY = "準備完了！";
			TEXT_WAIT_GOALKEEPER = "対戦相手は保存準備ができています！";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "ニックネームを選択する";
			TEXT_SYS_UPDATE = "アップデート";
			TEXT_SYS_MATCH_LIST = "マッチリスト";
			TEXT_SYS_QUICKMATCH = "クイックマッチ";
			TEXT_SYS_CREATEMATCH = "マッチを作成する";
			TEXT_SYS_BACK = "戻る";
			TEXT_SYS_OK = "ok";
			TEXT_SYS_CREATE = "作成";
			TEXT_SYS_CLOSE = "閉じる";
			TEXT_SYS_LOADING = "読み込み中";
			TEXT_SYS_NAMEROOM = "部屋に名前をつける";
			TEXT_SYS_CREATEROOM = "部屋を作成する";
			TEXT_SYS_PASSWORD = "パスワード";
			TEXT_SYS_INFOPASS = "パスワードを設定しない場合は、この部屋は公開状態になります。";
			TEXT_SYS_TYPEROOMPASS = "部屋のパスワードを入力";
			TEXT_WRONG_PASSWORD = "パスワードが違います！";
			TEXT_NETWORK_CONNECTING = "接続中...";
			TEXT_ROOM_IS_FULL = "ルームは満員です！";
			TEXT_FIND_OPPONENT = "対戦相手を探しています...";
			TEXT_CONNECT_TO_LOBBY = "ロビーに接続...";
			TEXT_ROOM_DOESNT_EXIST = "ルームは存在しません！";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "ルーム内で対戦相手を待機中： ";
			TEXT_SYS_FINDROOM = "部屋を見つける...";
			TEXT_SYS_DEFAULTROOMNAME = "%s の部屋";
			TEXT_WAITING_ROOM_MESSAGE = "この部屋は最大 %d 人まで受け入れ可能です";
			
			TEXT_NO_CONNECTION = "接続がありません （オンラインでプレイできるように接続してください）";
			TEXT_REMATCH_ALERT = "%s がもう一度プレイしたがっています";
			TEXT_SYS_INVITE = "招待する";
			TEXT_SYS_COPIED_TO_CLIPBOARD = 'ゲームリンクをクリップボードにコピーしました。フレンドとシェアしましょう！';
			TEXT_PLAYER_KICKED = "不活発だったためゲームからキックされました。"; 
			
			break;
		}
		case LANG_ZH:{
			TEXT_PRELOADER_CONTINUE = "开始";
			TEXT_MULTIPLIER = "x";
			TEXT_SCORE = "分数";
			TEXT_LEVEL_SCORE = "关卡得分";
			TEXT_TOTAL = "总分";
			TEXT_GOAL = "进球！";
			TEXT_ARE_SURE = "确定要退出游戏？";
			TEXT_CONFIRM_DELETE = "所有进度将会被删除！确定？";
			TEXT_SAVED = "已保存！";
			TEXT_MISSED = "没射进！";
			TEXT_HELP = "滑动来踢球";
			TEXT_HELP_KEEPER = "点击屏幕来让对手踢球";
			TEXT_WIN = "你赢了";
			TEXT_LOSE = "你输了";
			TEXT_CREDITS_DEVELOPED = "开发团队";
			TEXT_VS = "VS";
			TEXT_MATCH = "匹配";
			TEXT_SELECT_TEAM = "选择你的队伍";
			TEXT_MATCHES = "比赛";
			TEXT_ERR_LS = "您的游览器不支持本地存储设置。如果您使用的是苹果浏览器(Safari)，最常见的原因是使用了“隐私浏览模式”。可能会导致某些信息无法保存或某些功能无法正常工作";

			TEXT_PLAYER = "玩家";
			TEXT_CPU = "CPU";
			TEXT_EXTRA = "额外内容";


			///////////// GAME MULTIPLAYER TEXT
			TEXT_WAIT_OPPONENT = "等待对手……";
			TEXT_OPPONENT_LEFT = "对手离开了！";
			TEXT_PLAYER_DISCONNECTED = "你离开了！";
			TEXT_REMATCH = "你想要重新匹配吗？";
			TEXT_WAIT_STRIKER = "你的对手正在踢球";
			TEXT_GET_READY = "准备好！";
			TEXT_WAIT_GOALKEEPER = "你的对手准备好保存了！";

			///////////// LOGIN ROOM SYSTEM TEXT
			TEXT_SYS_CHOOSENICK = "选择昵称";
			TEXT_SYS_UPDATE = "更新";
			TEXT_SYS_MATCH_LIST = "匹配列表";
			TEXT_SYS_QUICKMATCH = "快速匹配";
			TEXT_SYS_CREATEMATCH = "创建比赛";
			TEXT_SYS_BACK = "返回";
			TEXT_SYS_OK = "确认";
			TEXT_SYS_CREATE = "创建";
			TEXT_SYS_CLOSE = "关闭";
			TEXT_SYS_LOADING = "加载中";
			TEXT_SYS_NAMEROOM = "命名房间";
			TEXT_SYS_CREATEROOM = "创建房间";
			TEXT_SYS_PASSWORD = "密码";
			TEXT_SYS_INFOPASS = "如果你不设置密码，这将是公共房间。";
			TEXT_SYS_TYPEROOMPASS = "输入房间密码";
			TEXT_WRONG_PASSWORD = "密码错误！";
			TEXT_NETWORK_CONNECTING = "连接中……";
			TEXT_ROOM_IS_FULL = "房间已满！";
			TEXT_FIND_OPPONENT = "正在寻找对手……";
			TEXT_CONNECT_TO_LOBBY = "连接到大厅……";
			TEXT_ROOM_DOESNT_EXIST = "房间不存在！";
			TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "在房间里等待对手： ";
			TEXT_SYS_FINDROOM = "寻找房间……";
			TEXT_SYS_DEFAULTROOMNAME = "%s的房间";
			TEXT_WAITING_ROOM_MESSAGE = "这个房间最多容纳%d名玩家";
			
			TEXT_NO_CONNECTION = "无网络连接\n（联网以匹配玩家）";
			TEXT_REMATCH_ALERT = "%s想要再玩一局";
			TEXT_SYS_INVITE = "邀请";
			TEXT_SYS_COPIED_TO_CLIPBOARD = '已复制游戏链接到剪贴板。向朋友分享吧！';
			TEXT_PLAYER_KICKED = "你由于不活跃被踢出游戏。"; 
			
			break;
		}
	}
}