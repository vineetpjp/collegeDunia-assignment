import React from 'react'
import collegeImg from '../../asset/images/college_01.jpg'
import {commaInRupee,addClassToOfferText, addClassToNearestPlace} from './cardFunctions';
import {Markup} from 'interweave'

const Card = ({college}) => {
    const data = college;
    return (
        <div className='col-2'>
            <div className='card'>
                {data.promoted&&<div className='card__tag'>
                    <p className='card__promoted' >PROMOTED</p>
                </div>}
                <div className='card__header'>
                    <img src={collegeImg} alt='Collgeimg' className='card__header--img' />
                    <div className='card__header_rating'>
                        <div className='card__rating--no'>{data.rating}<span className='card__rating--total' >/5</span></div>
                        <div className='card__rating--remarks'>{data.rating_remarks}</div>
                    </div>
                    <div className='card__header_details' >
                        <div className='card__header--tags' >
                            {data.tags.map((tag)=>{
                                return (
                                <div className='card__header--tag'>{tag}</div>
                                )
                            })}
                        </div>
                        <div className='card__header--ranking' >#{data.ranking}</div>
                    </div>
                
                </div>
                <div className='card__content'>
                    <div className='card__content_row card__content--first' >
                        <div className='card__content--collegeinfo' >
                            <div className='card__content_row-2' >
                                <div className='college-name' >
                                    {data.college_name}
                                </div>
                                <div className='rating'>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="far fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='card__address' >
                                {data.nearest_place[0]} | <span>{data.nearest_place[1]}</span>
                            </div>
                            <div className='card__content_row-2' >
                                <span className='card__percentmatch' >93% Match :&nbsp; </span>
                                <span className='card__famousnearestplaces font-greyish ' >
                                <Markup
                                    content={addClassToNearestPlace(
                                        data.famous_nearest_places
                                    )}
                                />
                                </span>
                            </div> 
                        </div>
                        <div className='card__content--feesinfo' >
                            <div className='card__content_row-2' >
                                <div className='card__originalfees' >
                                <div className='card__ruppeicon' >&#8377;</div><del>{commaInRupee(data.original_fees)}</del> 
                                </div>
                                <div className='card__discount ' >
                                    <div className='card__discount--dot' ></div>
                                    <div className='card__discount--text' > {data.discount}</div>
                                </div>
                            </div>
                                <div className='card__feescolumn' >
                                    <div className='card__discountedfees' >
                                    &#8377; {commaInRupee(data.discounted_fees)}
                                    </div>
                                    <div className='card__feescycle' >
                                        {data.fees_cycle}
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='card__content_row card__content--second '>
                        <div className='card__content_row' >
                            <div className='card__offertext font-greyish-brown ' > 
                            <Markup content={addClassToOfferText(data.offertext)} />
                            </div>
                        </div>
                        <div className='card__content_row' >
                            <div className='card__amenties' >
                                {data.amenties[0]} 
                                &nbsp;
                                 <div/>
                                 &nbsp;
                                 {data.amenties[1]} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card;
