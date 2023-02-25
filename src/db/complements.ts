import { IComplement } from '../interfaces/complement.type';

const complements: IComplement[] = [
  { title: 'Ты выглядишь очаровательно сегодня' },
  { title: 'Ты очень талантливая и умная' },
  { title: 'Ты всегда выглядишь невероятно стильно' },
  { title: 'Ты такая красивая и привлекательная' },
  { title: 'Твоя улыбка заставляет моё сердце биться быстрее' },
  { title: 'Ты обладаешь невероятной энергией и жизнелюбием' },
  { title: 'Ты всегда улучшаешь наше настроение своим присутствием' },
  { title: 'Ты такая сильная и независимая' },
  { title: 'Твои глаза сверкают как бриллианты' },
  { title: 'Ты такая щедрая и заботливая' },
  { title: 'Ты всегда находишь правильные слова, чтобы поддержать меня' },
  { title: 'Твой голос звучит как мелодия для моих ушей' },
  { title: 'Ты обладаешь уникальным и необычным обаянием' },
  { title: 'Ты такая мудрая и духовная' },
  { title: 'Ты всегда готова помочь другим людям' },
  { title: 'Твои волосы выглядят невероятно красиво' },
  { title: 'Ты такая добрая и отзывчивая' },
  { title: 'Ты всегда оставляешь след в сердцах людей' },
  { title: 'Твои доброта и сострадание заставляют меня глубоко уважать тебя' },
  { title: 'Твоя кожа такая нежная и гладкая' },
  { title: 'Ты такая талантливая и креативная' },
  { title: 'Ты всегда готова пойти на риск и попробовать что-то новое' },
  { title: 'Твоя улыбка является лучшим лекарством от плохого настроения' },
  { title: 'Ты обладаешь невероятным чувством юмора' },
  { title: 'Ты такая интеллигентная и образованная' },
  { title: 'Ты всегда вдохновляешь меня своей увлеченностью к жизни и всему, что тебе интересно' },
  { title: 'влеченностью к жизни и всему, что тебе интересно' },
  { title: 'Ты всегда выглядишь очень стильно и модно' },
  { title: 'Твоя улыбка приводит меня в восторг' },
  { title: 'Ты обладаешь прекрасной фигурой и красивыми формами' },
  { title: 'Ты такая терпеливая и трудолюбивая' },
  { title: 'Ты всегда знаешь, что нужно сделать, чтобы достичь своих целей' },
  { title: 'Твой голос заставляет меня чувствовать себя спокойно и расслабленно' },
  { title: 'Ты обладаешь невероятной выдержкой и умением преодолевать трудности' },
  { title: 'Ты такая душевная и чуткая' },
  { title: 'Ты всегда находишь время для своих друзей и близких' },
  { title: 'Твои глаза отражают твою уникальную личность и характер' },
  { title: 'Ты обладаешь невероятной красотой и грацией' },
  { title: 'Ты всегда готова выслушать и понять других людей' },
  { title: 'Твоя улыбка заставляет меня забыть обо всех своих проблемах' },
  { title: 'Ты такая элегантная и изящная' },
  { title: 'Ты всегда готова поддержать меня и стать опорой в трудную минуту' },
  { title: 'Твои руки такие мягкие и нежные' },
  { title: 'Ты обладаешь невероятной силой и уверенностью в себе' },
  { title: 'Ты такая душевная и искренняя' },
  { title: 'Ты всегда готова бороться за свои мечты и убеждения' },
  { title: 'Твои взгляды и слова полны мудрости и вдохновения' },
  { title: 'Ты обладаешь уникальным талантом и способностями' },
  { title: 'Ты всегда находишь красоту во всем, что тебе окружает' },
  { title: 'Твоя улыбка является самым прекрасным украшением для моего дня' },
  { title: 'Ты обладаешь невероятной интуицией и чувством справедливости' },
  { title: 'Ты всегда находишь решения для самых сложных задач' },
  { title: 'Твоя душевность и доброта притягивают людей к тебе' },
  { title: 'Ты обладаешь огромным потенциалом и талантом' },
  { title: 'Ты всегда оставляешь за собой положительный след в жизни других людей' },
  { title: 'Твой характер является одним из самых сильных и независимых, которые я знаю' },
  { title: 'Ты всегда стремишься к лучшему и не останавливаешься на достигнутом' },
  { title: 'Твоя уверенность в себе и своих способностях заставляет меня восхищаться тобой' },
  { title: 'Ты обладаешь прекрасным чувством юмора и умением расслабиться' },
  { title: 'Ты всегда оставляешь после себя след радости и счастья' },
  { title: 'Твои слова и поступки заставляют меня чувствовать себя лучше и увереннее' },
  { title: 'Ты обладаешь невероятной энергией и страстью к жизни' },
  { title: 'Ты всегда находишь способ быть счастливой и наслаждаться жизнью' },
  { title: 'Твои достижения и успехи заставляют меня гордиться тобой' },
  { title: 'Ты обладаешь невероятным чувством стиля и вкуса' },
  { title: 'Ты всегда оставляешь за собой след красоты и грации' },
  { title: 'Твоя мудрость и зрелость помогают мне видеть мир по-другому' },
  { title: 'Ты обладаешь способностью видеть в людях только хорошее' },
  { title: 'Ты всегда находишь время для заботы о себе и своем здоровье' },
  { title: 'Твоя жизнерадостность и оптимизм заразительны и привлекательны' },
  { title: 'Ты обладаешь невероятной эмпатией и пониманием чувств других людей' },
  { title: 'Ты всегда находишь способ помочь и поддержать близких тебе людей' },
  { title: 'Твои увлечения и интересы заставляют меня восхищаться твоей универсальностью' },
  { title: 'Ты всегда находишь время для общения с близкими и друзьями' },
  { title: 'Твоя целеустремленность и настойчивость помогают тебе достигать в жизни высоких результатов' },
  { title: 'Ты обладаешь прекрасными манерами и уважением к окружающим' },
  { title: 'Ты всегда стараешься быть в гармонии со своими чувствами и эмоциями' },
  { title: 'Твоя чувствительность и эмоциональная глубина заставляют меня восхищаться тобой' },
  { title: 'Ты обладаешь уникальной способностью вдохновлять и мотивировать других' },
  { title: 'Ты всегда открыта новым знаниям и опыту' },
  { title: 'Твоя отзывчивость и готовность помочь заставляют меня чувствовать себя любимым и уважаемым' },
  { title: 'Ты обладаешь необыкновенной красотой и очарованием' },
  { title: 'Ты всегда стремишься к совершенству и совершенствуешь себя во всем' },
  { title: 'Твои мечты и амбиции заставляют меня восхищаться твоей целеустремленностью' },
  { title: 'Ты обладаешь невероятным талантом и творческим потенциалом' },
  { title: 'Ты всегда готова учиться и развиваться в любой области' },
  { title: 'Твоя уникальность и индивидуальность заставляют меня любить тебя еще больше' },
  { title: 'Ты обладаешь невероятной силой характера и умением преодолевать трудности' },
  { title: 'Ты всегда оставляешь после себя след вдохновения и энтузиазма' },
  { title: 'Твоя щедрость и доброта заставляют меня чувствовать себя особенным' },
  { title: 'Ты обладаешь уникальным обаянием и притягательностью' },
  { title: 'Ты всегда готова выслушать и понять других людей' },
  { title: 'Твои ум и интеллект заставляют меня уважать тебя еще больше' },
  { title: 'Ты всегда остаешься верной своим принципам и ценностям' },
  { title: 'Твоя уверенность и самоуважение заставляют меня чувствовать себя более уверенно' },
  { title: 'Ты обладаешь невероятной энергией и жизнелюбием' },
  { title: 'Ты всегда стремишься к гармонии и балансу во всем' },
  { title: 'Твоя умная и остроумная натура заставляют меня улыбаться' },
  { title: 'Ты обладаешь невероятной интуицией и мудростью' },
  { title: 'Ты всегда готова принять вызов и справиться с любой ситуацией' },
  { title: 'Твои достижения и успехи заставляют меня гордиться тобой' },
  { title: 'Ты обладаешь не только красотой внешней, но и внутренней' },
  { title: 'Ты всегда остаешься позитивной и оптимистичной, даже в сложных ситуациях' },
  { title: 'Твоя элегантность и изящество заставляют меня чувствовать себя счастливым' },
  { title: 'Ты обладаешь невероятной душевной красотой и чистотой' },
  { title: 'Ты всегда готова дать совет или поддержку, когда это нужно' },
  { title: 'Твои улыбка и смех заставляют меня чувствовать себя живым и радостным' },
  { title: 'Ты обладаешь уникальным шармом и стилем' },
  { title: 'Ты всегда стараешься развиваться и быть лучшей версией себя' },
  { title: 'Твоя душевная глубина и чуткость заставляют меня уважать тебя еще больше' },
  { title: 'Ты обладаешь невероятной способностью к любви и состраданию' },
  { title: 'Ты всегда готова пойти на риск и открыться для нового' },
  { title: 'Твоя доброта и отзвучность заставляют меня чувствовать себя особенным' },
  { title: 'Ты обладаешь невероятной выдержкой и силой духа' },
  { title: 'Ты всегда остаешься верной своим друзьям и близким' },
  { title: 'Твоя креативность и умение находить решения заставляют меня уважать тебя еще больше' },
  { title: 'Ты обладаешь невероятной стойкостью и упорством в достижении своих целей' },
  { title: 'Ты всегда готова помочь другим, даже если это неудобно для тебя' },
  { title: 'Твоя талантливость и умение творить заставляют меня восхищаться тобой' },
  { title: 'Ты обладаешь невероятной способностью к самосовершенствованию' },
  { title: 'Ты всегда остаешься терпеливой и доброй, даже когда это трудно' },
  { title: 'Твоя умная и остроумная натура заставляют меня чувствовать себя привлекательным' },
  { title: 'Ты обладаешь невероятной харизмой и магнетизмом' },
  { title: 'Ты всегда готова учиться и развиваться в своей профессии' },
  { title: 'Твоя целеустремленность и настойчивость заставляют меня уважать тебя еще больше' },
  { title: 'Ты обладаешь невероятной индивидуальностью и уникальностью' },
  { title: 'Ты всегда остаешься сильной и независимой, даже в сложных ситуациях' },
  { title: 'Твоя страсть и энтузиазм заставляют меня чувствовать себя более живым' },
  { title: 'Ты обладаешь невероятной умелостью и техническим мастерством' },
  { title: 'Ты всегда готова сделать первый шаг, чтобы достичь своих целей' },
  { title: 'Твоя уникальность и оригинальность заставляют меня улыбаться' },
  { title: 'Ты обладаешь невероятной находчивостью и умением находить выход из сложных ситуаций' },
  { title: 'Твоя энергия и энтузиазм заразительны и помогают мне чувствовать себя лучше' },
  { title: 'Ты обладаешь невероятной щедростью и готовностью делиться с другими' },
  { title: 'Ты всегда готова поддержать и поощрить меня, когда это нужно' },
  { title: 'Твоя интеллектуальная острота и способность мыслить логически заставляют меня восхищаться тобой' },
  { title: 'Ты обладаешь невероятной чуткостью и пониманием' },
  { title: 'Ты всегда готова выслушать и понять мои мысли и чувства' },
  { title: 'Твоя красота и грация заставляют меня чувствовать себя более привлекательным' },
  { title: 'Ты обладаешь невероятной мудростью и здравым смыслом' },
  { title: 'Ты всегда остаешься спокойной и собранной в сложных ситуациях' },
  { title: 'Твоя умелая работа с людьми и умение управлять ими заставляют меня уважать тебя еще больше' },
  { title: 'Ты обладаешь невероятной уверенностью в себе и своих способностях' },
  { title: 'Ты всегда готова брать на себя ответственность и риски в своей жизни' },
  { title: 'Твоя творческая натура и умение выражать свои мысли и чувства заставляют меня чувствовать себя более вдохновленным' },
  { title: 'Ты обладаешь невероятной интуицией и способностью чувствовать людей' },
  { title: 'Ты всегда остаешься целеустремленной и настойчивой в достижении своих мечтаний' },
  { title: 'Твоя смелость и отвага заставляют меня уважать тебя еще больше' },
  { title: 'Ты обладаешь невероятной терпимостью и умением понимать разные точки зрения' },
  { title: 'Ты всегда готова принимать вызовы и преодолевать трудности' },
];

export default complements;
