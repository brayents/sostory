var config = {
    style: 'mapbox://styles/brayents/ck3lla4952raw1clt4xp8u70q',
    accessToken: 'pk.eyJ1IjoiYnJheWVudHMiLCJhIjoiY2pxc3NsbXJoMDI1aDQ4bW9vaWY1a3p3dCJ9.1FV1am7z-bwT69SVq_gdUw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Timeline of My Journeys',
    subtitle: 'Maybe just an ordinary story, but worth to tell',
    byline: 'by Briantama Asmara',
    footer: 'Source: Primary data, BIG and ATR/BPN',
    chapters: [
      {
          id: 'intro-1',
          title: 'My Journeys so far',
          description: 'Well, I have been travelling here and there since college until now, mostly never spent a dime on every trip. So far, I have been to various places in Indonesia from researching, expedition, and supervising for work-related jobs.',
          location: {
            center: [105.27497, 0.23779],
            zoom: 3.82,
            pitch: 16.50,
            bearing: 2.25
          },
          onChapterEnter: [
              {
                  layer: 'all',
                  opacity: 1
              }
          ],
          onChapterExit: [
          ]
      },
      {
          id: 'intro-2',
          description: 'I spent most of the time both in Java and West Papua. In West Papua, I have been so many places whether for expedition, community services, or just passing by. Roughly, I spent around 8 months in West Papua. ',
          location: {
            center: [105.27497, 0.23779],
            zoom: 3.82,
            pitch: 16.50,
            bearing: 2.25
          },
          onChapterEnter: [
            {
                layer: 'all',
                opacity: 1
            }
          ],
          onChapterExit: [
          ]
      },
////////////KAIMANA///////////////
        {
            id: 'kaimana-1',
            title: 'Expedition to West Papua',
            description: 'In the beginning of 2016, my journey was started to take place. I went to West Papua as a part of an expedition held by the partnership of both government and special military forces. The purpose was to doing preliminary assessment to the most remote areas in the West Papua. We situated in there for 6 months, mostly living together and helping the communities along our way to various chosen destination. Me, as a assistant leader of disaster assessment, was responsible for collecting disaster data and doing survey to the most vulnerable areas around Kaimana, West Papua.',
            location: {
                center: [133.76423, -3.39570],
                zoom: 4.63,
                pitch: 3,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'bintuni',
                    opacity: 0
                },
                {
                    layer: 'sorsel',
                    opacity: 0
                },
                {
                    layer: 'kaimana',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'kaimana',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kaimana-2',
            description: 'Kaimana, as one of the regency in West Papua has many disadvantages in terms of disaster, for instance tsunami, earthquake, landslide, drought, and sea-level rise. So our team collects all the disaster data based on field observation and sometimes held the disaster preparedness meeting into the most vulnerable communities.',
            location: {
                center: [133.75694, -3.58821],
                zoom: 7.5,
                pitch: 31,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'kaimana',
                    opacity: 0.5
                },
                {
                    layer: 'desa-point',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'kaimana',
                    opacity: 0
                },
                {
                    layer: 'desa-point',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kaimana-3',
            description: 'This is the villages that I visited that time. I have been to many remote villages in Kaimana and find most of the communities were living along the coastal areas and riverine inside the bay.',
            location: {
                center: [133.75694, -3.58821],
                zoom: 7.5,
                pitch: 31,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'kaimana',
                  opacity: 0.5
              },
              {
                  layer: 'desa-selected-point',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'kaimana-poly',
                  opacity: 0
              },
              {
                  layer: 'desa-selected-point',
                  opacity: 0
              }
          ]
      },
        {
            id: 'kaimana-4',
            description: 'Many villages along the river in the Arguni Bay suffered from the drought as most of them were situated in the lowland areas and geologically limited to the groundwater sources. To be able to obtain water, some of them were relying on the rainwater harvesting from the rainy season, sometimes collect from the faraway villages about one-hour with speedboat, and the last resort was using water from the river',
            location: {
                center: [133.76063, -3.11898],
                zoom: 10.47,
                pitch: 23,
                bearing: 25.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'kaimana-5',
            description: 'Some of the villages were prone to tsunami especially Namatota Island, the inhabitants of the island were nearly equals to the sea level and without natural or proper protection if tsunami were suddenly happened. Historically, there has been significant earthquake but tsunami yet to occured.',
            location: {
              center: [133.91433, -3.85317],
              zoom: 13.37,
              pitch: 42.50,
              bearing: 18.40
            },
            onChapterEnter: [
              {
                  layer: 'desa-selected-point',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'desa-selected-point',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: 0
              }
            ]
        },
        {
            id: 'kaimana-6',
            description: 'Lastly, there was a one-of-a-kind disaster that have not been categorized yet. It was like whirlpool on the small scale. It happens in Arguni Bay right in the bottleneck between the vast areas of Arguni Bay and the Seram Sea. It was deadly for the navigation in the daytime, so it must passed in the early morning or only the local expert that can passed safely, if not you will be trapped. They called it "Arus Taputar Wanoma"',
            location: {
              center: [133.66537, -3.31651],
              zoom: 10.47,
              pitch: 47.50,
              bearing: 14.40
            },
            onChapterEnter: [
                {
                    layer: 'wanoma',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wanoma',
                    opacity: 0
                }
            ]
        },
////////////KAIS///////////////
        {
            id: 'kais-1',
            title: 'Community Services to the Remote Villages in West Papua',
            description: 'After one years from West Papua, I have a chance to do another visit in Papua for the college community services in Sorong Selatan Regency.',
            location: {
              center: [132.17774, -1.64321],
              zoom: 6.76,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
              {
                  layer: 'kaimana',
                  opacity: 0
              },
                {
                    layer: 'sorsel',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'sorsel',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kais-2',
            description: 'Located in Kais and Tapuri village, we had been doing public goods in the 2 months time. I was trusted as a cluster leader who was responsible for the engineering and science cluster program.',
            location: {
              center: [132.25460, -1.84841],
              zoom: 15,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
                {
                    layer: 'kais_point',
                    opacity: 1
                },
                {
                    layer: 'point_label',
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'kais_point',
                  opacity: 0
              },
            ]
        },
        {
            id: 'kais-3',
            description: 'The big thing about our program was to provide high-detailed map based on field survey and aerial photograph, then solved the boundaries between the two villages which are still in conflict.',
            location: {
              center: [132.25200, -1.84765],
              zoom: 15.18,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
              {
                  layer: 'kais-building',
                  opacity: 1
              },
              {
                  layer: 'jalan-kais',
                  opacity: 1
              },
              {
                  layer: 'batas-kais',
                  opacity: 0
              },
              {
                  layer: 'point_label',
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'kais-4',
            description: 'We offered a very detailed map and be able to solve the boundary (in pink colour) between them and I am acting as a mediator . At the end, we were honored to be recognise to the mayor of South Sorong to our program to solve the high level problem in there. Everybody was happy with the outcome!',
            location: {
              center: [132.25200, -1.84765],
              zoom: 15.18,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
              {
                  layer: 'kais-building',
                  opacity: 1
              },
              {
                  layer: 'jalan-kais',
                  opacity: 1
              },
              {
                  layer: 'batas-kais',
                  opacity: 1
              },
              {
                  layer: 'point_label',
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'kais-5',
            description: 'While we mapped the entire two villages, we also done our census to the all of the settlers from the twos. So we would be able to saw the pattern and made the village profiling based on statistics and database we inhirited from the thorough questionnaire. We took a theme about sago palm which is the commodity there, once called "the largest sago areas in Indonesia". More documentation about this are here http://bit.ly/34GpQ2o',
            location: {
              center: [132.25200, -1.84765],
              zoom: 15.18,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
              {
                  layer: 'kais-building',
                  opacity: 1
              },
              {
                  layer: 'jalan-kais',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'kais-building',
                  opacity: 0
              },
              {
                  layer: 'jalan-kais',
                  opacity: 0
              }
            ]
        },
////////////BINTUNI///////////////
        {
            id: 'bintuni-1',
            title: 'A short time in Bintuni Bay',
            description: 'Late 2017, I was going back to West Papua to do field survey and mapping in Teluk Bintuni regency as a freelancer. It was a project as part of Population Survey held by Center of Population and Policy Studies Universitas Gadjah Mada',
            location: {
              center: [130.53488, -2.19071],
              zoom: 6.52,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
              {
                  layer: 'kaimana',
                  opacity: 0
              },
                {
                    layer: 'bintuni',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'bintuni',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bintuni-2',
            description: 'Positioned in Sumuri District, me and my colleague (just the two of us), were instructed to mapped the 3 villages there--Tofoi, Tanah Merah Baru, and Saengga villages--in 3 weeks notice. Just the two of us and me acting as a leader of this survey, facing the obstacles between us in terms of terrifying heat and sunburn, languanges, and the long journey from village to village.',
            location: {
              center: [133.12146, -2.50396],
              zoom: 11.26,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
                {
                    layer: 'bintuni_point',
                    opacity: 1
                },
                {
                    layer: 'jalan-bintuni',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'bintuni_point',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bintuni-3',
            description: 'The long journey we had to endure and using just motorcycles, facing the exit way out of palm-oil plantation and ride through the rough terrain with no signage and proper road. Me and my friend were survive the big challenges and not afraid of anything. Brave and bold.',
            location: {
              center: [133.12146, -2.50396],
              zoom: 11.26,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
                {
                    layer: 'jalan-bintuni',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'jalan-bintuni',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bintuni-4',
            description: 'After everything was done, I was instructed to mapped the result with WebGIS. Built with good and reliable geodatabase, I will be able to produce the decent results at the end.',
            location: {
              center: [133.12146, -2.50396],
              zoom: 11.26,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bintuni-5',
            description: 'Here is the result of Tofoi villages',
            location: {
              center: [133.25775, -2.54315],
              zoom: 13.95,
              pitch: 0.00,
              bearing: -1.24
            },
            onChapterEnter: [
                {
                    layer: 'tofoi',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tofoi',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bintuni-6',
            description: 'Here is the result of Tanah Merah Baru villages',
            location: {
              center: [133.10418, -2.45607],
              zoom: 14.78,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
                {
                    layer: 'tmb',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tmb',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bintuni-7',
            description: 'Here is the result of Saengga villages',
            location: {
              center: [133.09695, -2.47537],
              zoom: 14.41,
              pitch: 0.00,
              bearing: -0.16
            },
            onChapterEnter: [
                {
                    layer: 'saengga',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'saengga',
                    opacity: 0
                }
            ]
        },
///////////////WORK 2018///////////////////////
{
    id: 'work2018-1',
    title: 'First Legit Jobs in the Government',
    description: 'Just couple of days from graduation day, I had a chance to work in the Ministry of Agrarian Affairs and Spatial Planning to handle Agrarian Reform program.',
    location: {
      center: [105.27497, 0.23779],
      zoom: 3.82,
      pitch: 16.50,
      bearing: 2.25
    },
    onChapterEnter: [
        // {
        //     layer: 'tora',
        //     opacity: 1
        // }
    ],
    onChapterExit: [
        // {
        //     layer: 'tora',
        //     opacity: 0
        // }
    ]
},
{
    id: 'work2018-2',
    description: 'Agrarian Reform 2018 was the next thing for Jokowi governmental era to eradicate the distinction between the development and agricultural lands. The program were located in 34 provinces in Indonesia to complete about 9 hectares of land reforms. So, I had been handled the geospatial data for all provinces to be validated, fulfilling the criteria of land as agrarian reform suitable lands.',
    location: {
      center: [108.21560, -0.92394],
      zoom: 5,
      pitch: 0.00,
      bearing: -0.00
    },
    onChapterEnter: [
        {
            layer: 'tora',
            opacity: 1
        }
    ],
    onChapterExit: [
        {
            layer: 'tora',
            opacity: 0
        }
    ]
},
///////////////WORK 2018///////////////////////
{
    id: 'work2019-1',
    title: 'Learning Spatial Planning Policies',
    description: 'After learning so much about the land aspect, how about move on and taking spatial planning? So I decided to take a job in this institution for now until the end of the year. Mostly, I handles the spatial planning geodatabase in Border Region of East Nusa Tenggara',
    location: {
      center: [124.31031, -9.48622],
      zoom: 7.37,
      pitch: 32.00,
      bearing: -9.60
    },
    onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1
        // }
    ],
    onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
    ]
},
{
    id: 'work2019-2',
    description: 'The three spatial planning--Atambua, Napan, and Oepoli--were my main responsibilities on the case. I learn so much about spatial planning procedures, technical terms, trickle-down policies, and mapping aspect.',
    location: {
      center: [124.11528, -9.38021],
      zoom: 8.95,
      pitch: 41.00,
      bearing: -11.36
    },
    onChapterEnter: [
        {
            layer: 'rdtr_point',
            opacity: 1
        },
        {
            layer: 'point_label_rdtr',
            opacity: 1
        }
    ],
    onChapterExit: [
        {
            layer: 'rdtr_point',
            opacity: 0
        },
        {
            layer: 'point_label_rdtr',
            opacity: 0
        }
    ]
},
{
    id: 'work2019-3',
    description: 'Atambua, named as Centre of National Strategic Areas (PKSN), were complicated enough to be planned. The complexities as the biggest cities right next door from Timor Leste makes Atambua were strategic to future development in the eastern part of Indonesia. So, we need to produce high quality spatial planning and accurate mapping as well.',
    location: {
      center: [124.88750, -9.09541],
      zoom: 11.82,
      pitch: 32.00,
      bearing: -9.60
    },
    onChapterEnter: [
        {
            layer: 'atambua',
            opacity: 1
        },
        {
            layer: 'point_label_rdtr',
            opacity: 1
        }
    ],
    onChapterExit: [
        {
            layer: 'atambua',
            opacity: 0
        }
    ]
},
{
    id: 'work2019-4',
    description: 'Oepoli, located right next to the conflicted area--Naktuka--were problematic as hell, especially the borderline mapping. Until now, the borderline delineation were still subjected to change in the high level government.',
    location: {
      center: [124.04358, -9.37332],
      zoom: 11.82,
      pitch: 24.50,
      bearing: -8.00
    },
    onChapterEnter: [
        {
            layer: 'oepoli',
            opacity: 1
        },
        {
            layer: 'point_label_rdtr',
            opacity: 1
        }
    ],
    onChapterExit: [
        {
            layer: 'oepoli',
            opacity: 0
        }
    ]
},
{
    id: 'work2019-5',
    description: 'Napan, acting as borderline post, as far as I am concerned, there was not a meaningful challenges in this region. Only the development were much relied into the another region, Kefamenanu, to support Napan future.',
    location: {
      center: [124.37500, -9.37951],
      zoom: 12.60,
      pitch: 16.50,
      bearing: -15.36
    },
    onChapterEnter: [
        {
            layer: 'napan',
            opacity: 1
        },
        {
            layer: 'point_label_rdtr',
            opacity: 1
        }
    ],
    onChapterExit: [
        {
            layer: 'napan',
            opacity: 0
        }
    ]
},
    ]
};
