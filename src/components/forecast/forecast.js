import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const Forecast = ({data}) => {
    return (
        <div className="forecast">
            <label className="title">Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.map( (item,index) => {
                    return(
                        item.dt_txt.includes("12:00:00") && <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                        <label className="day">{item.dt_txt}</label>
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="temp">{Math.round(item.main.temp)}°C</label>
                                    </div>

                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-item">
                                        <label>Pressure</label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Humidity</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Cloud</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Wind speed</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Pressure at sea level</label>
                                        <label>{item.main.sea_level} hPa</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Feels like</label>
                                        <label>{Math.round(item.main.feels_like)}°C</label>
                                    </div>

                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );

                })}
            </Accordion>
        </div>
    );
}
 
export default Forecast;