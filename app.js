const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowCursos1 = addKeyword('1',{ sensitive: true }).addAnswer(
    ['¿Cómo inscribirse a un curso?\n',
'- Ingresá a la página, seleccioná el curso y rellená el formulario en “reservar vacante”.',
'- Ingresá a la página web (https://www.frgp.utn.edu.ar/extension/guia_cursos), seleccioná',
'el curso, hacé clic en “reserva tu vacante” y completá el formulario con tus datos.',
'\n Escriba "menu" para volver al menu principal'],
null,
null,
[]
)

const flowCursos2 = addKeyword('2',{ sensitive: true }).addAnswer(
    ['¿En qué fecha y horarios comienza un curso?\n',
    '- Toda la información se publica en la página',
    '- La información sobre inicios y horarios la encontrarás en nuestra página web',
    '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
    '\n Escriba "menu" para volver al menu principal'],
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
        '\n Escriba "menu" para volver al menu principal'],
null,
null,
[]
)

const flowCursos4 = addKeyword('4',{ sensitive: true }).addAnswer(
    ['¿Cómo sé el precio del curso?\n',
      '- Ingresando a la página',
      '- La información sobre costos la encontrarás en nuestra página web',
      '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
      '\n Escriba "menu" para volver al menu principal'],
null,
null,
[]
)

const flowCursos5 = addKeyword('5',{ sensitive: true }).addAnswer(
    ['¿De qué tratan los cursos y cuáles son sus temarios?\n',
     'La información sobre los cursos la encontrarás en nuestra página web',
     '(https://www.frgp.utn.edu.ar/extension/guia_cursos)',
     '\n Escriba "menu" para volver al menu principal'],
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
            flowDynamic("Respuesta incorrecta")
            gotoFlow(flowCursos)
        }
    },
    [flowCursos1, flowCursos2, flowCursos3, flowCursos4, flowCursos5]
    
    
)


const flowPagos = addKeyword('2',{ sensitive: true }).addAnswer(
    [
        'Menú Pagos\n',
            '1 - ¿Cuáles son las formas de pago?',
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
            flowDynamic("Respuesta incorrecta")
            gotoFlow(flowPagos)
        }
    },
    []
    
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
            flowDynamic("Respuesta incorrecta")
            gotoFlow(flowQA)
        }
    },
    []
    
    
)

const flowRP = addKeyword('9',{ sensitive: true }).addAnswer(
    ['Un representante se pondra en contacto contigo'],
    null,
    null,
    []
      
)

const flowPrincipal = addKeyword('menu',{ sensitive: true })
    .addAnswer(['Menú Principal \n',
        '1- Cursos',
        '2- Pagos',
        '3- Preguntas Frecuentes \n',
        '9- Hablar con un representante.'],
        null,
        null,
        [flowCursos, flowPagos, flowQA, flowRP]
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
