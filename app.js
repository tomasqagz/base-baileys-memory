const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')




const flowCursos1 = addKeyword('1',{ sensitive: true }).addAnswer(
    ['¿Cómo inscribirse a un curso?\n',
'- Ingresá a la página, seleccioná el curso y rellená el formulario en “reservar vacante”.',
'- Ingresá a la página web (https://www.frgp.utn.edu.ar/extension/guia_cursos), seleccioná',
'el curso, hacé clic en “reserva tu vacante” y completá el formulario con tus datos.',
'\n Escriba *"menu"* para volver al menu principal',
`Si tienes mas dudas, escribe *"representante"* para contactarte con uno`],
null,
null,
[]
)

const flowCursos2 = addKeyword('2',{ sensitive: true }).addAnswer(
    ['¿En qué fecha y horarios comienza un curso?\n',
    '- Toda la información se publica en la página',
    '- La información sobre inicios y horarios la encontrarás en nuestra página web',
    '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
    '\n Escriba *"menu"* para volver al menu principal',
    'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowCursos3 = addKeyword('3',{ sensitive: true }).addAnswer(
    ['¿Cómo abono el curso?\n',
        '- Ingresar la orden de pago: SAF - Orden de Pago (utn.edu.ar), ingresar con tu DNI en usuario y',
        'contraseña',
       '- Debés ingresar a nuestra página web de pagos https://op.frgp.utn.edu.ar/, con tu DNI en',
        'usuario y contraseña. Seleccioná orden de pago y luego el curso y cuota que vas a abonar.',
        '\n Escriba *"menu"* para volver al menu principal',
        'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowCursos4 = addKeyword('4',{ sensitive: true }).addAnswer(
    ['¿Cómo sé el precio del curso?\n',
      '- Ingresando a la página',
      '- La información sobre costos la encontrarás en nuestra página web',
      '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
      '\n Escriba *"menu"* para volver al menu principal',
      'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowCursos5 = addKeyword('5',{ sensitive: true }).addAnswer(
    ['¿De qué tratan los cursos y cuáles son sus temarios?\n',
     'La información sobre los cursos la encontrarás en nuestra página web',
     '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
     '\n Escriba *"menu"* para volver al menu principal',
     'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowPagos1 = addKeyword('1',{ sensitive: true }).addAnswer(
    ['¿Cuáles son las formas de pago?\n',
    '-	En 1 pago o en Cuotas \n',
    '¿Cuáles son los medios de pago?\n',
    '-Mercado pago con: tarjeta de débito, tarjeta de crédito bancaria, transferencia.',
    '-Homebanking: Transferencia Bancaria (solicitar los datos al siguiente e-mail capacitacion@red.frgp.utn.edu.ar)',
    '-Depósito Bancario por cajero: (solicitar los datos al siguiente e-mail capacitacion@red.frgp.utn.edu.ar)',
    '-Pago Fácil / Rapi Pago: Deberás descargar la orden de pago desde nuestra web de pagos https://op.frgp.utn.edu.ar/', 
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowPagos2 = addKeyword('2',{ sensitive: true }).addAnswer(
    ['¿Cuándo puedo abonar?\n',
'-	La persona a cargo de la coordinación del curso se pondrá en contacto para informártelo',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)


const flowQA1 = addKeyword('1',{ sensitive: true }).addAnswer(
    ['¿Qué necesito para hacer un curso?\n',
'Ver requisitos del curso en la página web (no todos los cursos tienen los mismos requisitos)\n',
'-	Ser mayor de 16 años.',
'-	Si es a distancia, conexión a internet.',
'-	Si es presencial, algo para tomar nota.',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowQA2 = addKeyword('2',{ sensitive: true }).addAnswer(
    ['¿Debo tener estudios previos para hacer un curso?   Ídem anterior\n',
    '-	No, el único requisito es ser mayor de 16 años.',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)
const flowQA3 = addKeyword('3',{ sensitive: true }).addAnswer(
    ['¿Cuándo recibo mi certificado?\n',
     '-Una vez finalizado el curso, el certificado tiene un tiempo administrativo de aproximadamente de 30 días, se enviará al correo electrónico con el que se inscribió.',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowQA4 = addKeyword('4',{ sensitive: true }).addAnswer(
    ['¿Finalicé el curso y no recibí mi certificado?\n',
    '-Una vez finalizado el curso te le llegará una encuesta de satisfacción por e-mail, la cual deberás completar y es un requisito para poder enviar tu certificado. Corroborar haberla completado.', 
    'Revisar:\n',
    '•	La cuenta de correo con el que se inscribió',
    '•	Haber recibido y completado la encuesta de satisfacción',
    '•	Bandeja de correos no deseados',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)

const flowQA5 = addKeyword('5',{ sensitive: true }).addAnswer(
    ['¿Otorgan becas?\n ',
        'Sí, se otorgan becas a:',
        '•	Alumnos regulares de las carreras y docentes de la UTN FRGP',
        '•	Graduados de las UTN FRGP',
        '•	No docentes de la UTN FRGP',
        '•	Familiares directos del personal no docente de la UTN FRGP',
        '•	Personas con discapacidad',
'\n Escriba *"menu"* para volver al menu principal',
'Si tienes mas dudas, escribe *"representante"* para contactarte con uno'],
null,
null,
[]
)



const flowCursos = addKeyword('1',{ sensitive: true }).addAnswer(
    [
        'Menú Cursos\n',
        '1 - ¿Cómo inscribirse a un curso?',
        '2 - ¿En qué fecha y horarios comienza tal curso?',
        '3 - ¿Cómo abono el curso?',
        '4 - ¿Cómo sé sabe el precio del curso?',
        '5 - ¿De qué tratan los cursos y cuales son sus temarios?\n',
        '0 - Volver al menú inicial'
    ],
    {capture:true},
    async(ctx, {gotoFlow, flowDynamic}) => {
        const num = ctx.body
        if(num =='0'){
            gotoFlow(flowPrincipal)
        }
        
        if(num!='0' && num!='1' && num!='2'&& num!='3'&& num!='4'&& num!='5'){
            flowDynamic("La respuesta no se encuentra en el menu")
            gotoFlow(flowCursos)
        }
    },
    [flowCursos1, flowCursos2, flowCursos3, flowCursos4, flowCursos5]
    
    
)


const flowPagos = addKeyword('2',{ sensitive: true }).addAnswer(
    [
        'Menú Pagos\n',
            '1 - ¿Cuáles son las formas y medios de pago?',
            '2 - ¿Cuándo puedo abonar?\n',
            '0 - Volver al menú inicial'
    ],
    {capture:true},
    async(ctx, {gotoFlow, flowDynamic}) => {
        const num = ctx.body
        if(num =='0'){
            gotoFlow(flowPrincipal)
        }
        
        if(num!='0' && num!='1' && num!='2'){
            flowDynamic("La respuesta no se encuentra en el menu")
            gotoFlow(flowPagos)
        }
    },
    [flowPagos1, flowPagos2]
    
)


const flowQA = addKeyword('3',{ sensitive: true }).addAnswer(
    [
        'Menú Preguntas Frecuentes \n',
            '1 - ¿Qué necesito para hacer un curso?',
            '2 - ¿Debo tener estudios previos para hacer un curso?',
            '3 - ¿Cuándo recibo mi certificado?',
            '4 - Finalicé el curso y no recibí mi certificado',
            '5 - ¿Otorgan becas?\n',
            '0 - Volver al menú inicial'
    ],
    {capture:true},
    async(ctx, {gotoFlow, flowDynamic}) => {
        const num = ctx.body
        if(num =='0'){
            gotoFlow(flowPrincipal)
        }
        
        if(num!='0' && num!='1' && num!='2'&& num!='3'&& num!='4'&& num!='5'){
            flowDynamic("La respuesta no se encuentra en el menu")
            gotoFlow(flowQA)
        }
    },
    [flowQA1, flowQA2, flowQA3, flowQA4, flowQA5]
)

/*
const flowRP = addKeyword('representante',{ sensitive: true }).addAnswer(
    ['Un representante se pondra en contacto contigo'],
    null,
    null,
    []
      
)*/

const flowPrincipal = addKeyword('menu',{ sensitive: true })
    .addAnswer(['Menú Principal \n',
        '1- Cursos',
        '2- Pagos',
        '3- Preguntas Frecuentes '],
        null,
        null,
        [flowCursos, flowPagos, flowQA]
    )



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
