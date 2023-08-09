import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Wrapper } from "./app.styled";
import { Icon } from "../Icon";
import Marquee from "react-fast-marquee";
import money from "../../assets/money.png";
import { useCallback, useState } from "react";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { scrollTo, scrollTop } from "../../helpers";
import { Form } from "../Form";
import { lock, unlock } from "tua-body-scroll-lock";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const openForm = useCallback(() => {
    setFormOpen(true);
    lock(document.getElementById("modal") || undefined);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
    unlock(document.getElementById("modal") || undefined);
  }, []);

  return (
    <>
      <Wrapper>
        <Box component="header" className="header">
          <Box className="headerContainer">
            <Icon
              color="white"
              name={sidebarOpen ? "menuClose" : "menu"}
              className="menu"
              onClick={() =>
                setSidebarOpen((prev) => {
                  if (prev) {
                    unlock(document.getElementById("modal") || undefined);
                  } else {
                    lock(document.getElementById("modal") || undefined);
                  }
                  return !prev;
                })
              }
            />

            <Box
              onClick={() => scrollTop()}
              component="h1"
              className="logo c-font-raleway c-fw-700"
              m={0}
            >
              OnePrice
            </Box>

            <Box component="nav" className="navigation">
              <Box component="ul">
                <Box component="li" onClick={() => scrollTo("about")}>
                  ПРО НАС
                </Box>
                <Box component="li" onClick={() => scrollTo("video")}>
                  ВІДЕО
                </Box>
                <Box component="li" onClick={() => scrollTo("partner")}>
                  ФРАНШИЗА
                </Box>
              </Box>
            </Box>

            <Box
              component="button"
              className="navButton c-fw-600 hover"
              onClick={() => scrollTo("contact")}
            >
              ЗВ`ЯЗАТИСЬ
            </Box>
          </Box>
        </Box>

        <Box component="section" className="hero" id="hero">
          <Box className="heroBg" />
          <Box component="h2" className="title c-fw-800 c-font-raleway" m={0}>
            Долучайся до <br className="mobile" />
            <Box component="span">ФРАНШИЗИ</Box>
          </Box>

          <Box className="heroButtonContainer">
            <Icon
              name="heroIcon1Mobile"
              className="heroIcon"
              width={252}
              height={106}
            />
            <Icon
              name="heroIcon2Mobile"
              className="heroIcon"
              width={226}
              height={81}
            />
            <Box
              component="button"
              className="heroButton c-font-roboto hover"
              onClick={() => scrollTo("contact")}
            >
              ЗВ`ЯЗАТИСЬ
            </Box>
          </Box>
        </Box>

        <Box className="movingStringBox">
          <Box className="movingStringCont">
            <Box className="movingString">
              <Marquee autoFill speed={60}>
                <Box className="marqueeItem c-font-raleway c-fw-700">
                  <Icon name="marqueeIcon" size={24} className="marqueeIcon" />
                  ФРАНШИЗА ПІД КЛЮЧ
                </Box>
              </Marquee>
            </Box>
            <Box className="marqueeBottomLine" />
          </Box>
        </Box>

        <Box component="section" id="about" className="aboutSection">
          <Box component="h2" className="sectionTitle c-font-raleway c-fw-700">
            ПРО НАС
          </Box>

          <Box className="sectionDivider" />
          <Box component="h2" className="sectionLogo c-font-raleway c-fw-700">
            OnePrice
          </Box>
          <Box className="flexContainer">
            <Box component="p" className="c-font-op c-fw-400 sectionText">
              Це мережа магазинів з великим асортиментом товарів за мінімальними
              цінами. У магазинах представлені товари з Китаю, а також товари
              українських виробників. У кожному магазині можна знайти понад 10
              000 товарів на всі випадки життя. Перший магазин OnePrice був
              відкритий восени 2018 року, а зараз мережа нараховує{" "}
              <b>більше 70 магазинів</b>! OnePrice - великий вибір, маленькі
              ціни!
            </Box>

            <Box
              component="section"
              id="video"
              className="videoSection desktop"
            >
              <iframe
                className="video"
                src="https://www.youtube.com/embed/sDFq6GftlNw"
                title="Как зарабатывать на магазинах “все по 50”? Сеть магазинов “OnePrice”. Открываем свой магазин"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>

          <Box component="ul" className="aboutList">
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Великий асортимент
            </Box>
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Маленькі ціни
            </Box>
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Швидка доставка
            </Box>
          </Box>

          <Box
            onClick={() => window.open("https://oneprice.ua/", "_blank")}
            component="button"
            className="videoButton desktop c-fw-600 hover"
          >
            БІЛЬШЕ
          </Box>
        </Box>

        <Box
          component="section"
          id="videoMobile"
          className="videoSection mobile"
        >
          <iframe
            className="video"
            src="https://www.youtube.com/embed/sDFq6GftlNw"
            title="Как зарабатывать на магазинах “все по 50”? Сеть магазинов “OnePrice”. Открываем свой магазин"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <Box
            onClick={() => window.open("https://oneprice.ua/", "_blank")}
            component="button"
            className="videoButton c-fw-600 hover"
          >
            БІЛЬШЕ
          </Box>
        </Box>

        <Box component="section" id="partner" className="partnerSection">
          <Box component="h2" className="sectionTitle c-font-raleway">
            ФРАНШИЗА
          </Box>
          <Box className="sectionDivider" />
          <Box component="ul" className="partnerList">
            <Box component="li">
              <img src={money} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">ПРИБУТОК</Box>
                <Box component="h3">Від ₴100 00 на місяць</Box>
                <Box component="p">
                  Вигідна франчайза - Ваш шлях до успіху! Започаткуйте свій
                  успішний бізнес разом з One Price. Отримайте унікальну
                  можливість отримувати прибуток від ₴100 000 на місяць, ставши
                  нашим франчайз-партнером.
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={money} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">ПОВЕРНЕННЯ ІНВЕСТИЦІЙ</Box>
                <Box component="h3">До 24 місяців</Box>
                <Box component="p">
                  У фінансовому аналізі інвестицій, розрахунок окупності
                  зазвичай здійснюється на період до 24 календарних місяців. Цей
                  важливий процес дозволяє оцінити, за який проміжок часу
                  інвестиція поверне зареєстровані вкладені кошти.
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={money} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">ПАУШАЛЬНИЙ ВНЕСОК</Box>
                <Box component="h3">$10 000</Box>
                <Box component="p">
                  Паушальний внесок становить $10,000 і є одноразовим платежем,
                  який власник торгової точки (франчайз) сплачує на користь
                  франчайзера під час укладання договору франшизи. Цей внесок
                  дозволяє отримати право використовувати вже визнану та успішну
                  бізнес-модель франчайзера, а також отримати необхідну
                  підтримку та навчання для ефективного запуску та управління
                  франшизою. Завдяки партнерству з франчайзером, власник
                  торгової точки має можливість скоротити час та ризики старту
                  свого бізнесу та зосередитись на розвитку та залученні
                  клієнтів.
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={money} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">ВКЛАДЕННЯ КОШТІВ</Box>
                <Box component="h3">80 - $100к</Box>
                <Box component="p">
                  Максимізуйте потенціал свого бізнесу з вкладенням коштів у
                  ремонт, обладнання та товар! Одноразовий платіж у розмірі 6%
                  від обороту допоможе вам підтримати ваш склад та офіс в
                  ідеальному стані. Підвищте рентабельність своєї діяльності,
                  вдосконалюючи умови праці та обслуговування, і забезпечте
                  успішну довгострокову перспективу для вашого бізнесу!
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={money} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">У ВСІХ МІСТАХ</Box>
                <Box component="h3">Від 50 000 населення</Box>
                <Box component="p">
                  Успішний франчайзинг з OnePrice може стати чудовою можливістю
                  для підприємців впровадити в життя свої бізнес-амбіції та
                  сприяти розвитку мережі в усіх містах України, забезпечуючи
                  жителям доступність якісних товарів за привабливими цінами.
                  Відкрити магазин OnePrice можливо у всіх містах України, від
                  п'ятдесяти тисяч населення.
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            component="button"
            onClick={() =>
              window.open("https://franchising.oneprice.ua/", "_blank")
            }
            className="partnerButton c-fw-600 hover"
          >
            БІЛЬШЕ
          </Box>
        </Box>

        <Box component="section" id="contact" className="contactSection">
          <Box component="h2" className="sectionTitle c-font-raleway">
            ЗВ`ЯЗАТИСЬ З НАМИ
          </Box>

          <Box className="sectionDivider" />

          <Box component="form" className="contactForm">
            <Box
              component="h3"
              className="contactFormTitle c-font-montserrat c-fw-700"
            >
              ЗАПИТ НА ДЕТАЛЬНУ ІНФОРМАЦІЮ ПРО ФРАНШИЗУ
            </Box>
            <Box
              component="p"
              className="contactFormText c-font-roboto c-fw-300"
            >
              Наші менеджери найближчим часом зв`яжуться з Вами!
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                E-mail
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                ПІБ
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                Номер телeфону
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                Коментар
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                Населений пункт
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box className="contactLabel">Ви є власником приміщення</Box>
              <RadioGroup
                //   value={value}
                // onChange={handleChange}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Box
                  sx={{ fontSize: "16px", mr: 2, display: "block" }}
                  component="label"
                >
                  <FormControlLabel
                    value={"Так"}
                    sx={{ m: 0, p: 0 }}
                    control={
                      <Radio
                        sx={{
                          color: "#a7f306",
                          p: 0,
                          mr: 1,
                          "&.Mui-checked": {
                            color: "#a7f306",
                          },
                        }}
                      />
                    }
                  />
                  Так
                </Box>

                <Box
                  sx={{ fontSize: "16px", mb: 1, display: "block" }}
                  component="label"
                >
                  <FormControlLabel
                    value={"Ні"}
                    sx={{ m: 0, p: 0 }}
                    control={
                      <Radio
                        sx={{
                          color: "#a7f306",
                          p: 0,
                          mr: 1,
                          "&.Mui-checked": {
                            color: "#a7f306",
                          },
                        }}
                      />
                    }
                  />
                  Ні
                </Box>
              </RadioGroup>
            </Box>

            <Box className="contactFormBottomWrapper">
              <Box
                component="button"
                className="contactFormButton c-fw-600 hover"
                type="submit"
              >
                НАДІСЛАТИ
              </Box>

              <Box className="contactFormLogo c-font-raleway c-fw-700">
                OnePrice
              </Box>
            </Box>
          </Box>
        </Box>

        <Icon
          name="footerDivider"
          width={360}
          height={3}
          className="footerDivider mobile"
        />

        <Box component="footer" className="footerNav desktop">
          <Box>
            <Box component="h2" className="logo" onClick={() => scrollTop()}>
              OnePrice
            </Box>
            <Box component="p" className="footerText">
              Великий вибір, маленькі ціни
            </Box>
          </Box>

          <Box component="nav" className="navigation desktop">
            <Box component="ul">
              <Box component="li" onClick={() => scrollTo("about")}>
                ПРО НАС
              </Box>
              <Box component="li" onClick={() => scrollTo("video")}>
                ВІДЕО
              </Box>
              <Box component="li" onClick={() => scrollTo("partner")}>
                ФРАНШИЗА
              </Box>

              <Box
                component="li"
                className="button c-fw-600 hover"
                onClick={() => scrollTo("contact")}
              >
                ЗВ`ЯЗАТИСЬ
              </Box>
            </Box>

            <Icon name="footerDividerDesktop" width={669} height={4} />
          </Box>
        </Box>

        <Box component="footer" className="footer">
          <Box className="rights c-fw-500">© 2023 OnePrice</Box>
        </Box>
      </Wrapper>
      <MobileSidebar
        openForm={openForm}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <Form open={formOpen} onClose={closeForm} />
    </>
  );
}

export default App;
