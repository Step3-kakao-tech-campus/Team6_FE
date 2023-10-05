import FestivalSection from "../organisms/FestivalSection";
import TrendingNowSection from "../organisms/TrendingNowSection";
import RestaurantSection from "../organisms/RestaurantSection";
import Carousel from "../../../common/organisms/Carousel";
import MainSearchRow from "../molecules/MainSearchRow";
import { useQuery } from "react-query";
import { getHome } from "../../../../services/home";

const dummySlides = [
  {
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUUExMWFhUXGB0bGRgYGB0gIBsdGhgYGhkeIBgbHyggHholHx0dITEhJSorLi4uHyAzODMtNygtLisBCgoKDg0OGxAQGy0lICUvLy0vLS8vLTUvLy8tLS8tLzItLy0tLS0tLS0vLy0tLS8vLS0vLS8tLS0tLS0tLS0tLf/AABEIALEBHQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcAAQj/xAA/EAACAQIEAwYEBAUEAQMFAAABAhEDIQAEEjEFQVEGEyJhcYEykaGxI0LR8AcUUsHhM2Jy8RVjgtIWFySSov/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFBgAH/8QAOREAAQMCBAMGBQMDAwUAAAAAAQIDEQAhBBIxQVFhcQUigZHh8BOhscHRMkLxFBUjM1JiFkNygqL/2gAMAwEAAhEDEQA/ALJ3J/2n0I+xwtaI/p95wotPTHAY6OTWZalrTWNmnyOHqNI/lP1w0h/c4dkeYOBqJqwp9K7i0/PC1r1P6sMBvXChGKFI4VaalLmqp3afX/OFiq3T6jEYMRzIw6tX9xgRTwFWmpCGfi+t8OaB0+kf2xFDDphxGHQfM4oUnarA0r5j9+mFBAdjPtjpX398eax0+uIvU14KPn+/lh1KMcif/cP7YSXHOcKWOpxBJqaeDrER9ThwNbYD3OGC/wC4x4HHn88Uy1M1I7z0+eFUqg8vnhgx1PzwgsP6j9MRkr2apVUk3IHsTjh9PfEUVV2kz6jCiq/1HEZCNanNNSSoPL9++Gyvr9MMgeePZPRT7YnIRXppRjz94x4Z5HCQ3kPrji4/pPzxMVFNtSPMfTHhAG6n64Xr6T8/8YS9X1xYSag0nWvn8jhxW6f3wwanl9BjzWOmLZaiammu5FjA/wCWIbsw5/U481T+X748ZT/SfmcQlIHCvEzSlrHqfrhxa5Pn74hsPJ/37YYPnqHtgnwwapmIoj/Mqv5R88NNmFY8wPKP74gMV5avfCGq/wC754uGRUFdTqqIZu30/XA2rSSdz8xjmzEc/piM9ef2cGQhQoalA0P4dn2ZBYkEyC5AJW0kkLNpsI5HxRhutxRlUWYEEjUV8NwYYljJUW2I6Tzx1PMd94Cr6YYVEFMsXV50FKiWExMz64i5jJo8orhGUFAiEVXemplTBIcQxBIPIHHyz+44krlby4/81aeGpInQaXmJroyw1l7qUk9Br46dPA1YEz40zAYD+iGm6iR7zI5AemIv/khBbVTqW3t4VE6tiCASsCYExiFkaTrljFRiELl6g0m9NiCgp/mUqJkGcVztFwkopemytTDiV0nwCpdDrPxTquQcFY7QxS1lH9QrWNTf8bRf5kUJ1LaUBYbGknS3v3aTV8yXF2ZQQiMW03PhEMAARcySfymDc+UzDnpO6LpXxGAQCRaQSCDcG8TjLsj2uaigp6SxQEeJjpIYyZUD4hyabDCf/MVsyyU6NPUgA00lklgh31GGMTzMcueDz2nJ/wAqgkb5tr8Trvf/ANjAFDD2GKR3LmLR51p9XOafD+YxHhaPiOkBjN9pPlO1sO0c8Sghb7SQJj4p0kRI+G02O+KLwvPASKxCVFZzX1hu8ZCoIKsBItaJA25HAvJ8bqBge6sACg8QC92SQSbyDNwd53tgCXO0FJUkOrtz110JM7SCDppe1XLmHTlUpIE/LqI20NaY3EohAyAiBfTI1GE5GQYtO83i2PDxo041+EMYLMiwpEiCBOgbXPNl9MZzwjjdWmwFSu0QR4YMFgdJiZIBaQpt0GLFxnKsUNQl6TKjt8IAaAobWQ1nfSCBykCJnAXTi2XAlby4OhzL989DEjrVkOtuNlTaBI2gdenvrVkHFqx1EoqiJXToJMCGADRABO5sYnmMdU440O3eJpQ6CTTEq8kXXTPNR9b86Bx2pXoUgneUqh1dxJDBqesSVDndYB8UGOUSMB6eezFSulIVD3w8CgExte9uVyTeBfBmv6t4Zg+Yv+5Wm55fQToRVFuIbsW722GvCtbrcUqqIYpMfEO7G0BzBFgo8W55gxj1+JMV6lQZIBE6TvIke1pF8ZzneKZukwVlSGE6qaoQxJOshoN2iGwqh2jq0WdzQZl1lpIYEawttVwNQAte22KBOPKZS8TPBZvccdLniN54VJfw+bKURHLSrRV7WoG0ayokDV5lhMyG2vyO42AnDy5o6lDalDnUPEWDMPxD4z4IESI6W2jFdz2UqZwUqlISSh/1GXvdLs0EwICiLQSY5DBzI5auiBiqs2lNQWzsUChbMSq+EsDABtbphfEO5kCVkkzIUsm/OYEcbaWEa1drNnIIsLghO3109Z0qaa5EGnVIEKFmG1gLqhROoECd73G+I7caNRarUyXKLNhCyUY3gXICxMdB54gVan8u1VjWqyNKOdIIVntTZJOw+GN4Nsdxeq1HvKitTcqU7wFYZXgpr8JAkyZ3g/PFULdskKO0XIEgjlzsbajiBRFm2YpjWbAmDN/c0TyPFi6akZg1gzAQSQAdMEAMbNYSRyBnECtx6qxBps5NIFyhbRE/CtxBHhPh8udxiuZDj7qxHianENEahII1B41BhJj1OJmX7QAvUIRlDfmsZ/DCA1LeOImOpNtsNZMS0pWXMRt3j5GI8IiIETSoxLK0jMYO9vpr61Y+H9oWrRUdiptpJgCCdIB2DAgtJ67XAxOXiFW6rUULsNUSCRa5gxDrAgEHrioZyr/MMppuoZIMkBbIAGYt0mCF6Ec8GuLSFHdN3ZJXSw06X1MKaja7AAMDBIGF3HHEOAhZSTOpNpgXOuwvG1HaVmSZAIG9r66DTXb0FH8hxh2TVKtMj4eewsYAvbnfETM9pHSm5KozKs6FTxEFQRvF94tFr4rOVy1RWKLVOhQIqtSDEnvLwD/6hJncR6YXVoVXzOsprRGcBXanLQWYhAfiAJBE+XmAZOLxCVf6xgSf1HrBkDXTW3LeCE5bt3mPyR01qycP47UqLYAmBuvnY2HOIn3tIxFzPHX7zSHWT8KhY2ZgxII+EWg7HzO8PMV2ooz1KZtBMlQKhYIh1hJUm/hE8jiP/PVHzVEmjVQaapOtRJWNRA09PhA3k33GKpx+LJJDiog/vOwmOO457dJWhoACLyNjuY8NKK5Xi2YqSyqgAaCsTYakMQZJ1A8hsL2MSv8AyNQSDpJ0gg6CoBBOo/EZUxYb9YmcCq1KoHDLpl+7A72ACfEzHQNqsE3taemAXHc0aNRVDLUpODAklSikrpKmUkRExeIJOLtY7GvLhDqt9zwHhoLbzOkzUOIabRKkWmPXp751bKfaBlYLUoghmADIYHwkljJMKYMEwLe+H8zxymoJKGAJMPsAJMruI8I2PxDzii18+9WjT/l6vjpgkyUkKQq6SCFUuWBjc7nmMAG4pUVYDs3K5YwQZ58ySf2LPs4vtBz/AL0HQiBx5ptSrisOj9kg77adRNaY/anK72IAYnS4MwNgeRn3FrXtIo8QVr91UUAmYMkwJAAIHn6belHy2cpOQlFPCGWowKhNKJGpXe5aTeT7XMYnrnormg7mAsip+GAxYM8gsvhJDFQZ59TgZ7V7RRMOGRcyE6dIt03mRN1UYMsESQIsBExJ5mrPX4xQhWVKjUz+a/8At2AUn830O2G8txai6z3dQG8aiBcEwOZBjriu8a0CgzUdB0AFI1ByiVPxCTMFdUER68sVzhXaGqoCJR1SSVAvBB/pgnTFjsT16ma7V7RdQpaHNCRBCRHmPrO9UW0whQCk7a3rRafEcsdUh1iPijdo02jaDc7Da+H1q5UgFqjISNiR9+cYqfFK1XXQESFLNUDtATSFGrvGBPd6mMWuREHEriS6hTOim4KA6nrvckAGNIjYC9t8V/6hx1u+L8Ak6W3jhOu+9FGBZM93TqPz042qOtehU7yj3v4jFV7uyOCigjSY0xFwOswLxgZX449N6zFTTNWlT7tyJcmmIM+GCSLf3xKzHB1zYTNZXSGkNobnoYRO/i2k+mK1x1atLMNRZ3NMGVV2YxaYEjTAmB5DCWGZbcXk5XB1SQRMAWiQnbYyYq+JcLaAtJ6eIP5ozmu1QhKa6HUQxdgUJqSSSFBiJMne84k8C4yzinRZajMqsgpgjRWDajLE3WAbmDtbpil8R0kgGSPCQB1iR+l+hxMyPEmy9SnXuGXw6TNxcRbkRPLDrnZ7ZaKUC/3gj5yQYA4iCAQgjGOFwEm3TQHgKtHB+D/yoetWqBiPwwKID6C27HUBJ/L74bcmnn6tKnTGl1KuFISFFNWLatkEiYv0xN7O5tar1ky9N8uWXU9Rm1abghVQgG8kyeW2J7dlAKwr5euS8nUtS6urBpBgSZlRHlO8RlrdyrWXj3infwI/TIABkiDzgbvfCSUp+CO6kzI8Z689B1odkOKF833LK1PvKaCkykMWFHUwmpsdQm4HQGYxNNc5crUag1FKziUUgFStwBAhkaTKmDM9MRuB+PPIr0xQaird3TGmJ/NvJJ8RMqZFx1xMzPaFlzndVFXSHCrIuNQgOJt+b5HFHEd4oSkRlBUJ14EG8/tM3iDcgmSNAuIzBV5MEjidxtuNqqHEK4bM66J0knWpKjdTbwrykDn0viVxXj3foUp09JeprqnUSJAMaQQNIkzBnC80lKhngjsrIrAnclRqkg2uwvIxK7TVBoDFqbsapFM09J/DhjsvQwOt+eNEqbLjQyzbum/Xx2JnTUb1mpS58NwhUcRx/HKKrWZzj1FQM9RgkhNYlQbRcm3ob2jBXIcDzIrLmUp3UhgGZdLB0bVCA6oC8o2PlhivwWsaDNoOgsIK3knUpgcm8MEkW98WXgWfeor0Kit+BoJkaTpUMQDNwQwANphoti+IdKGj8IJIuCORIBsOt+s17DICnO+SDEg++QNBBxNKlSie6pGnSE6A7RuzWaZY6pMGRbbniz/z9Mv3KqyjSwCNHdOai6lDSecwOR9jgDl+BPmHLU6aqjNyOnSCRe0Npgg2ERGJfaLIFEEqwNNUU1JMFgFMA8xpnbnOF3mmXFpa0MG0yQSdTJg3JHEzzBojbryEqcPI3GvHbhHK1qtvBQBqQAAqFJUEEKSslQAbAGTGwm2KjkXzRzgHj1a/ED8OmenSLg7bYH8I4w9PS6EjqCCAwH1g2v8AriyP2zbQAKc1CB4raZtqtOqDeMAVg32lqCU5swjp6b8PK7LGPbykKtFT+0nDTVM1KuikoXc85MkgiJ2j/EFlsuWotrpjMCpUC6qfhLIPhdyv5p32GPEztPM0NVe60zLQZkgGNQG1z8N56Rh/wNk6gyqlI/KJBEkSBExM8v1wnC0Q0r9pjkPEQZOv12phPwygujcT15RpQil2fpUiR3b1w1YooWR3SWidP5vM2tipZ78OrUph2cK7JJG7CQbXttixZDKV5q09dSi4mSWCqzTAHVpF9YtYb497KZFIq95TbSq6ypHxTEbETdDFv6hzONFt1TWda15gIHO+h/jx0ms9xpLmRARlJn2fWoXZrKFqrB2XQKRNSQTKhhIBWPIgg/a5nifEqTd5SVPgproIQKNUIVKuG1TvblB3jE3IZugKX8xo7ndAonSxMRNoK+1r4Xw7JtWcvWCwmnu9KwLwbobwb2PU7YWddSpwuOCAPORE6SCftxiKYQ0ttv4e5np6fXpUPg3Dq1SmKr5j8R1ikHv4dwDeSpPLmL4FUuJVaTaHRWcO4YsRC651AREW58h88GuNcdyxzCLUnVTb4ltEEGD1Hlvg1m6OW09+1NTzkjrzgbkz9sU+LF3UWULCIjgBEWj15lVhVIACCRxvrz61U85k6tRe8fQmlfDRYn4KUhrdLG5N77YYyXG6bFqbKaKaG0NTDNpZiJPX0HkMW3P0g1HvMuisSIELPhYnVZrbm8+eBlPgNKtmLqo0IvfKpiWNwAF2AgT1t54sjENqSQ4LDSLEeGl5iVbyN6GthaCFIN953PpuBtUTM5qnQy9GqrOyKVhiDqqFRUEMGiB4je5xJ/kaeYyyulFApokICDrB3EMT8JMzOCD53LVG/lhTS3wgoCmsTaOtumB/azIZh+6GUI0L4SFIWDy9vIfLAUmVgHukmcxO22kX9bU4ESkpVwvUDhXZavcOFVXs0RNjaxHXmJ3tgHx7s6qPTpKGqNUWQpC6gfFPQH4eX0xec5lq2igDUA0FS76gAIibbmbjphjhdYVczXqi4kKpAWDpABIO5ve0+2Dt496S7IiNALToJ+vGBwvSS8E0kBCdSdZv4fSu4bw2llkp09SrCgG5jWBzsAQTMlh0iIxH7Q8Go1wQCobVOpbuV0nULkBiTAGqwHyxU+2PEqprsk6QvQb2F4574d7E5mo1RgZZRuY+m/2wQYN1KP6jPfU+PPx8acUlB/xkWp5OyWZINJ8w4oLJ00wDqA8UDnJvCwQCJ6YJHsxpy57tKmXfXNTxKzsgFvxCyhRedwBGxxYeIZ1aTUzpUKx8TEMQNIPQEBudyLTiImSK5h8zUrIaIkzJ+ErAUjbSJ942wsvFvLEqMbi2qtCIHdJJ4g6CqttoSbajzHpVOp512bXpIpmmKTalVkhAWmoTYiTMg+k4m5jipbS1DNUkUosi86goBkCnAAsBEC3riJ2g4TDwjU6lOsQ6losxmQGA+Ab+EWEe8jJPkaGoClUrkm706LafQaZFpO2HlpZKQtIPQAaf8swiZ4xp5LNl3MU6xqSd+Q6VHy3FXFBmpL3bU18QAPi0jcfp98Ccr2pkv3lJajuunUTBAg/mgkdPDfpgVRzCpcgze/te3vhpsxl96bNqIvKn3A6Gwv541hg2pIImeRt48Pe1KpxKlIyxcDlfa3D+eNO1FBAPIwd72JtP7+uGcrWZesyI0G33w4+cUk7gcrAGOZJ2n/F8Q8xYDQIkmY8gORtuT8hhxHOkIkkGtR/h3n+8p1kB8cTJAsCIEtMm82i3W+C+QRspk2dgdYlmvNwY59YGMmymdZGDrUUOJIYfllWHtbUPc4u3A+2neg080A6MdJZRYA7yvO3THP4/s9zMpaBKSQSN7fI8ePWtbB4tsICFWjQ7UW4R2oNWpoqLp1bEHaOrAW/zib2h4llqZNSpRD1E+AgAmd1uYtzxTeNvQDK2X1tTKmVkhhtGqb6fnHPA+nnmNMNUYa4sWljA2BFrxyBxVPZyFkOJBA3FwfyOBqHu0VIJAAJ0n3b3eKM8WZM++tZVtAlBfUOoI3vYztad7D+Cqr5qjTdCfHBTaQSxPyMnlacN0c4ShIQeHoIFyJFuePMnmq4qiuCVifhu2kxa4NiR67+eH0srS2W0aRA5H5+96QLyFuBRG9+fgYq28Y7QtSrGnTWFp7yZlt5GqTsR8sFJSplxWRUQnwsCQikFoeWiTYWuPWcV96uXzP4mYqihUa2kEDwqSBvO/XzxG7RZ6l3NKllazMaTC2rwkTMsdidQn3xlf090tJSQqwVYxpeToQTzrZW8hTRXIjbSatXa3ijUBTSkYkbydhtfc484DxE5mnUp1ApaIvsd4/XATifaCnVyk5hNVdVmx8IYnkQZ07Wj9cA+D9pmpHT3YYEEKLiWOxM25/vfHkYBamCMsKB143mQdI6xVF45qAE3B15cZ/FR84rK7K8yrFbA7ix+3PywunVBVCQVgEAmJ+XXA6lkiJJgeYi522OHXrFB4iI8o29PbG8UggHU+kc658RcJo/2d46tN3SupNOrYm02MA9T7fXFw4Xm8vSy71KBJQG5O7GwiOXSCB9ZIPst2Y1BK1ZF0QYR1IaQYBKsPhIn54tdJ8sVNBQmi8oIgSZNh5yfXHO9ouMqcIRJ0mDaxjzjfSt/AIdCBmFuG/vlUbhXF0zWpWSCAGAmZAYEQRtcC2GOGccU1TRNI02FrgeZAPzt6+eHaGTo5O66yaraVJvBuQJ5LvfywJ/8SlOnVqA1XqU5lSiyJHJCAG5mefK4wuEtKzC8ft1189J28r0ypUXABpvtFnadSo1Gu1SkqtACgeIQCDBuOceXXFj4Y6lF0pClF0tKklRtPMb/AHxRMjwis7VWNGSHPhLCJC3WYuAYv5+uPOHZ6rlWNvCoPhDAKWncE7rB5DDbmES6jI0ZIAtIi+pEG07zPCkGsQpCszggHffeOvlTfE+y+b75lRNSuxh5EQTImbgjF/TJLTywpOdkhj5xcj0wE7LdqDXqFKixMlWBEcgFGogyI5Sb8sNfxHq1BTp6SQhY6iD5WE8sCdL7zqGHIBHufIbU+0tDiSpOlG2p06tJ6NNjBnYxF5AkcuXPADh3/wCBmIciKzKvxLJIt3hHJCQYk2HU4Hdg2bv2jUaRW8tq8VrT1x7/ABBy4R0qBAyVJGoL+a1i4JLE8haINsEaaKXjhSqUqHzN/O3uaBiYCQ6kXHu9HP8AxlHLu2ZasDSBZ1Ubk8rz4rmBHlhunxlmylWpUBUkMVBYggN8IDATb09Yxn+ZztegWpKNOkxBElTa3l0jErL081mgXALaI1QQACZgANHIcsM/28QFOrBFr8hpykzcyelCVjQQUpScx25++VRs7naizqZiCbEub2vPQ+WLV/Dyq5ZtJGki8kTNwLbkbm0evIzuy/Z2mFc16auwcC11gFGW3K4IPlY74fyPZcUqqVKb6Wpl1diGgqWJRdM+LSpAmbwD6Ri8ay42tpIjgYsfek8xQcPhXEqS4rXhvwqZxLIZKu01ArMCVmYJImRI6aT8sCePZqlkitKmkNp1CBAiYvO4Nxz2wD4/SGWzVVtWpSdYBBABa5BM9enQDCeI8doZo+MOGUG6nwbGIAGq5g3iwgnA2cGsZDKlIiY4SBFvHlTi8WkFSdx4fPSplDtW0d24HjEAimxD/wCyAwEwd94OBvFHp1WSqKujQoR6fU6hcHV5jxG3yOGOL9oYoimihIPhZR+WTq8JJuTpO5IgYE5DhOYzLgUF16gTJaBA3nUDzt779H2cKEy6e54+wPtFrUorEqKoReR798zRfN8WBplFqMoAIXVpIC3BEhQ0nyPzxfOx/B1o5dV1GoDcSxgTuFVQNI5wZOKQvYTOF1p+AAqWD30jyIiQ21o+gxN4fwzP0jUoqodKbaVqNVamrWvpUnlseX1wpi0sOt5GnUi+YyfC5MX5c5ii4dbiVS4D8/pQbs72dGbp1O7ZSaYlVmZkMdyZF1j3GK/S4a7O6JQb8ME1GkgLpMGdQIttHPkMbX/LkAVFKzFiFUG/KQT94xTeIcZUVqtKrTjvAgeoqiSFcMpj8xFxO+/SMHwvaTzi15ACLWnS4B4TrbS/zEezwEWN7+PDpVBfhbEyGki4BP8AcAC/php25RBEiIv5+2LTxSgKL9xqRqgALKKboZNwBqGlrEcxiBQpUKviqBtyIMiSOfhv5XPI2xsIfC0hf7djy6fxx0NZa86CQvbh6UEy1ZiSUYC0EkTN+mH/AOcqHwJqZpiw3/xibnkpKD3VOFAN5JJ9AdsCFz9QSKY0jmSIt0kXwVIC9BbnUo79wPP70eyGTMFq/dliIG0xuZtBP6YQmaRg0SgUwTp29uQ5YBU8s9RwbwTOona3Mn7eeDTUJXRBZbFmMciLdYIkeVsUcQmZJ9PCqkJCu8r0qe+SGkimxF7yZH/fPnh/IhwpWywGII5tfc7b4B1q9XVeoYuYgAXnl+s4l5DiNUHTVBCtbe4mYgDlsD7nFFJkSDQwCdxUnh2UVAxJZyT4j8R9yYthh+GqWLEso5BW5c9+p9MJyHF2ao6RGk7kjrHT7YvPBcvl6mVqiumgH4nDQs7K4YxoqAEbb7XvhbFPKYSXDJ0mI34eHsCSDMNLccKJgkfaqu3D6iJLBgjTBaQNgTbpDD1nEOrlxTU1ArVADAC3gHe3UH9740upxyjmab06aguwKDYABoBOo7Db5AYqnFuG1MvRYz4grMxUEqloUarSZ5+m+FcNjCo5XE5VTpOo+20Hjab0ziMMpk2uPY8fDTegTZ1fENRJBiw6bXtbzxBfxFRUaQXA2FgSBEkgCBzn3wNy5rFgVplhG8QCPKbfXDuXFVqyipTY9FERG5vtbGqGspsfz5UBKMp2461vXaGqRlGNM/lFwRsYkiJ5eeM9p1AI0LDSIbqeXzODHZvtQtNFpVlc3Cho8KLtEcgPecGv5vh1Iqyinqb4dIliSJACiTqN4AE45RsLwstlBN7Eb+/PlW828h1KVBUbx9jR+jSOhZsYEg3v5HrOGs1mwgljAGHkYlQdLLInS0SPIgEicZ/2y4ixqmmCYFveJJ9RhDDYY4hzL500mNTVhXilNpQEaXLAwYJ1TJ6zgNxfs9RSlUqNVq6VUlVLahOwALbzYAffFRy2ZZWHiJE2PMH287Y0XhlYNQDVAWDLDAIXnlMBT9saLzKsJC21GCfex+n1oa223k6Csu4fXqUn1AmmCIcKxGoHztjWKHH8s9MTp02GkjykjREwB5XJjGe9pEp03HcVabL8IRNQZY316pvfcn2AGBWWeZveflBInyt/bGm/hm8YlLhkHyPj76caxG33MOSm3vhWn5/jGXSkwommSDpFNRctp1QFW8jfb7YFZWvFVKua0iq3+mmmShJF2vcxYNM9dsd2GykBm7xTUKmARJA21H+mxAjnOCXDOzVOke8dtTG4c7See536zjJc+CwVtTpaYuZFxyHHUna1abSS9DqvLp78OFB/4i8NpnJ97pKMXnwrJd2kLrcH4QJ+gEYe/hzlssaE0h+KAO9vUWTG3jMHY/DbfFc7RcbbMVDSZwe7Y6VVSpBAKt8Vyd/zMPXBv+H2cVSyHSGY2mCSYiAN+UztHphpxlxHZ+UkzOaxtB258evKKXRiEqxUAR1q08S4zRyw0AeI3CjfpfD/AAniiZhSVmxupsR8sVDi/C67ZxgI/EPgcjw2WdMwYNsWXs7wY0dTMTLxYjaOsHe5FidgeeMx5llLIVmlRAOvvS/O160s3eIi3Gs//ia9R8wtI1W0LLaVB0rNhJP5o++KlRyC3UVCGG8bjbdd/ri4duOCVBVd2hNTgIoqM7VCRcrI1GLSDtMCcVI5ZaLMHDK9OQ03MgwZgxjquz1thhKUETGgA1305mCRN7VhYnPnMz9frU/I8Nr1awApmrT1A6VdVhRYyzkQTjXM3maWVpAgKizYKFuTv4VtqPUYzv8Ah5xUvWNMPE3+ASQOjagAo9Cb7Yt38QcjVelTZAXCNLADkREgDf264yu0/wDJi0Mrsnxn593aNJ4zaNDAJhBJ19+NR27deI/hEpO8/sYs2T4iHRXTZhO2MryOVrVIRBAMAyIA5ST0xeshWTL01pFVJUQdbBTPO0Hc9CcKY7CNIADYvwnbnNNocJnMIFZ32F4+2SlWp02RpkqAKk8pqc1HQ9cX7jHAEzQDBgtTSG8F7NceLc7GDbn54xGpxDkqgeeC/ZvtbVyj6gNakrqEwSFYGJ9JG2xxvYvsxxSziGDC/r52Fp61l4bErSMrtx4VbO2WWWjTy7Vl1VdTIzoSGMCnoJkQwgGT1MczgFVzgCMYWNgzc5Nv31xL7S9pGz2kID3QVNQIGpagDhiD08UdDA6YCZNDWVqVW2kiGG8/bab+eCYNpxDI+IIIN+IBPDaJiOlK43Itwkab+965uIRuQB5D7YjZvjOpdME+vT064JUuDKfFVgk8gSAo5AR5czgNm+HBGYahANgT4iNxYD7xh9vJpvSzfwiqNxTb8TaQVJkRE8o5emDOV4uji8gyBpAn5eWB2U4ehiST5cvnzx4uTqUiWBToCZ5+2+IUGl23qyw0q2/1qbQqE1Dq2DwLehvPK4wSzWcCKwUSwFydv84B1Mw/dq+zA6THoTNt7AfPESi9RmEMZ6ztiPhZrmLVBZzGTYCieXQvVDjd9IteJs9pExHUC+4xrXavgtStQp9xBSzFVgBiBuYME+fpc4ynK0mk6Z6EiwvfcWGLhwbtpUyqLTcq6jUFncWULsB4Fj1M72xl49l5akLZuU7eHp96cweIbSopVofO1FOynAswtdXdSoWdRNp5QIxYu2WeRcu9Mvpdl8PhBnr/AKiMh9LHpBjED/63p95VU030BQVYECWAGtRfe9jsSp8sZx2q4hVzDCpD6YIJB8LkHwVNGysRExaenPLbwj+LxAU8nKBH53vvprtzrQdxTYbytmnMhkai/hqS6tASY1SbR5j/AKxauGdl6q1Ms7gmlUnXFihIYAMIteL7cvX3sP2XqVaNOu9fSQ0qNMklW66gIBGkiJlTfF74rnxRUsxEYvj+0FJc+E0QTcHXXS2ngeI50ng8Bn7zg6aXoFwXs8y/zHexD60prv4Z8Lk9TAMCI98VhuyVVMuubqVDTroGYgEhhqFNVQERpPxSRe4GDjdrhMgNGLFwfi1Ousi8G4I2PLywmp3FsH4ixYxOmgtHCCOWwO1aZwbYTCdpjxpPZ3OU2pIi+B9AY0z8YH9TCAfeMC+03Zfvn7ykQr852Mc/7Ymdos1mKBbMJTpd0qg1CWhyB5kQFEnmfbEfhXbTL16lOkszU2JjTYEkati21t7zgKA+kl9q4vN5jcg+s/WpQ4lPdPvpVfy3YusWHeFAoMwOeLrlkSiirq0j4RqI36SefQY8znGaVOn3uoMsr8JBJD6TI6+FtXoMC+0nH6Ap1aYC1CUsNJZWJAIBjkQRcG19iLwteIxcAgkch0njOo9Kst5CBqBVf7eZilUt+EzK0ErK1UgTpYHcdJA8ueKhlMumoFTDAgnaYnaN73HzxVeIZqo76mZzpsuok6QNgJ29MWvgGZpMFH5kUEk7xub+t4x1beDOEYCZn6fxWHiCVrz+/GilHiT0+8FNmUsCgIEwADG2xm+InF+NZl6Bos5WmQiwvLRp03Nx8IM/bEDOVAVLUx4psAZBHO0j6YDHPkqdJIY9Bv5f2xdvDIJzZRM7i4NBQtwCAoxUmjknJEMD0DG9vNQcHeGZytRqIwcK0kF2EgKdI1GASAL3jb0xW8kzBdThlK2kg7Sf/wCht5iPObHwZGzDpT73SGYDWq6mAIMwBuT1xOKsDngi829DPGINeTmCxHs1sGUzH4IZmUlRJZTKkDmD6c8VnP8Aa06vAsoLH/vB3M8MZco9GmS3hgauY6cgJ26Yp2U4XVq/h6GQT4mYQACZO+55Y5PCNMKzLXGvS3GPtxsK6USAIqw9oczoydSvTJB7udaiXVSCRpiLyRuYAk4zHs1wQ5x4cuiCxYU9UNMrqEgqp67WvvItv8Rkq0qdFUdlQ2gQVbSBAMyQVjYQDPlg12AouMrTZlUsZhkAHhLGx9CDzPl0w6y6rC4IuIIlRsdx5gg/QTxpJ0B18J4CjCZbK0AjCnRpsgIUgAQDuAd9Pl6dMdS4sh+EyvKMZpx/iTVajsSYDEADy29P+8D+D0a9VyqO6IN4PPkPXFR2RLZU4u8b7UwXEpOVIqwdseMGlVdaZ8TiW5aJCgBdO1gDc7mbbYpXEqzZioalUh2gCTHIRywT47le6cL8ciSec+e5nn74EtUjem3sAcbmDZS2hJQNtd/SsPFOrU4QfKffpVYwZ4XlKYAerfmEB39Y+0jHj5RSJ0x5iw/TDYrKp0r4gBc/p1xqqUSO7VFLKxCaN1M8TpCoqqCBHl5DacO5DLOxFiSLyo6XJj+nc7CBg/8Aw+7NUs7TeqzsCjhbQT8M7Gw3F77HGj8H4TTooAUTvApQuBGtSefmREzznljBx3arLBUgDMoajT57+FFYwC1gHQazWNcSqtT+CGk2nYKBcz6st8Ac3mlZyxsSADEkW6GMarwfsaQ9T+YIanTYqgKgCoTdfCoAFMSAQI6WjEnif8PcrU0LTWnSTX3lQhZdyTdQZinTAMhRaYta8p7Xw7agk3/5Dz8Ty9Yu1gVwVZY25mskzGfCwq3gQbCPnhpq5ceIx6b4u3GOyiUKhpoq1jckLS+FZtLA/FG8CBit5/gzaS1K0XK9fQm/tjUYeacSFI33Pv8AnakzlQrKRB4+tB6NJoZYsYO/Q/eMTuHCmGKnZh1+k+c/TEahmVnxSp52wslS4j094kYMqTINWXmVYijFXMQQFSQoNgRAmPInVBn3x6K1J5FRFGnabXIvBn4TPpbEChmGL90kE38XS0knqB/jEp8otT49959J+hkjqN+UEJSE6+e9DAAgG31opXqRLQJ39T+4xGyGdKyKlxPhIGw6R5e+I+aqN4Vvt9f+gMRhVAEmw64ChNqgCZreezS0Vy1PuFAVlDTaWJAktBPi/wCsVzt5q1UgfhJPzxXuxfayrSVcrTyxquzSjFwi+IAmRpMAGSY88aHxPIU8wmhyGNrjkfI8t8co42vB4uXbiTBsTGk6z5xpXS4ZxK0d3+OVZyc6q+GJPkMG+yVM96zAELEEjryt88EH7FrJiqwA6qCfngtlMrTyiRPgElmYj3JP9+nkMFfxjRbKW7k23+/yqWWS2SSZoJ/EfJO+UcrmqiLEGloEVDyXUq6hPmYOxjGW8LyVRG6BviE32OkiNmHL3HM4sfbXiy18yzU2IVQEIJsWUmSBMdBy2O9jgTl/huTzgjkTt/1jY7NbUxhwFHW8QBE9NeMn5VkYvEZnITTGZq1KJNQmaeypzJ0/TqT7c8SMlxmm67MpnpP23HywN4zXBI1fF+X03OEZSsugXjSIIINiPPbGjkzICiL+/PrSqwFCYoln82HWDqA6kQTPl0xCyJSjrKzHhknnO3tBxGr5yF1KdQ1adQ5HcTN+vrfDWaq6qNMbSSWbyEge94jyxZLRjLsT615DdoOlHKRWoLRfaP3vgPnEGslfDBmYuDzOJXC8urIChaDO4/Q4lZnIyDMTHW5HS+KJIbURNCHdVQ2hm77iefK2mSY6RfEg1BliGWQSQ0A7mJ25b3xBoMbCoDvEEQdxyPqBgrlMlTq1qQeoEp7M5ElbWny2vy3xdyEm+kXi80wICq0/sX2oasirWpOjMwVZUwwKltckQEgaR1Pra0VapAJIgyd9oDGPmPvgZwHh70KQpNUV6YHgInwjeBvK898edo+MrSp6DBdhsPv6Y4Z1KXX4aGp2mPnpzF4O9dAwFlIz+/zTmey9OqiJWTvApLXsL6gNvI/PErI1lVFVRpVRCgcgPXFMHaMlpaDe4HL6+uLVwzMpVRXUmCNgPmCf0xd/DONoAXp8p9aNkTqNag8a4VkmfvKqw7sBaRJMwSBysbneOuKFxvttl0mllksB4WAhQ0nUpUi6xBkcz5YO/wAS68BKINKkjkOzHWWfTZSdKGwPUyfbGWZuhSWodLd4k/FpKzbpuBP7GNzsnCJdQFvFR4C8Wt05RPXgMzE4gpOUetP1uMms5L21SAdTEA8t/wAs/LEH+cqqSpJkG88jzwp6dJrDwnC8xRJ0mROkAmdypK/YDHRpSgEJi1Z0pJmKYaqzbkn1/TDBcDbf3xNo5cG1/bErLZJQwWwkgSSYEmJPkN8TnCdarnSLVv3Z/h6U6SMFpamRQalJAmtQPASBzg9TzjfEPtHxhaIgnxHb9cK7LcJo0KQWlXaqIiQ8qOfhRTC/fFX7aqf5gTMaRAPkTP3GOAwrKHMTBJIvymOX2rokEhMxelN2paRcGNp9/P3we4HxtKjaT4W9Znb6+WKKxpnwxBjpY4boO1NxpMRceV+X3xrOYJpxJSBBqrb+atWr5UGlUSkRTLgy2n+rcnaTc3OMY7cacs75cMHPmpHhIkfmtaL872xtWSqaqakzJAN/MeWMz/il2fGpa2pQC0HTSbUxI3asSQYAAAtHIWwp2K8G8VkXofrtJ12/ilcewnJm/wBv0rLKRHPBDKZXUJPhTfV9LTzxNpZCkBdZjrzwQq8DqPQL93opCppmI8UE2EbWietsdevEI4xJj3zrILmbQH0qCM1SQAKQY/Kt/r1w+c2osp1MQLG0/Pn5YVm+y7ZbuzVBJqqGpwJmdgAOdxbzGFZzs9VAYurIVgsCPhDWTUNxJ+uA52VEEKkHfjePG9usDehqbSDcH3f6XqPXYEKXjxKPKf8ANsc9BRy9BOPKlBtCPUWVXUsgEy29oG/ik+ow4mXZV30rysdo+849oLH3O1eXyNO5W5AgAen98WPhfaSrQApq6lFbVpi5ncFt4xVxUVZZmYBTuxIJjoBe/TDFPiqMR8QJO3+emAuYf4ohSZFS0XEGUTWj5ftwwd2dfCxYhR+XwKKY87gz/wAvLFZ432kzFbUxJCGPwxsLRZo1dZ23OA9fMsSALjntK2Ec+eIr5nwlVM9b/SeuF2Oz2W1ZkpG3h+D+LUdWJdWmCffOvcvmADpMidptfE6mwjcATBJm3K+BWk/miPUfucWfs52QrZhqFYFXy9RjqNm0NTYkK6GDDERImzGcM4lbbac6zH3MEx4x9tYqiGS4q1SMp2WrZpiimmNKF1JNmMgAAxbffEHJdm6wr0ss1J0LOoYQbLq8ZB5+GTIkY2fJ5WnQUU0WEk6bk6dRmATcCeX+MdWqJKuYLLIB5gNGr7D5Y5z+8u95IFjpxBjW1tdRfrudJPZwyiTeb8DWcf8A2yLVM2obSgSKVv8AUYgPTnppIgkbz0kGmZ7hFalRoPUTQjJKhrGQfESpuLtbG/jMDEXiHD6VcEVFmUdAeaioIaOjEDfEMdtvoVK7i30jzNp8qK5gRlhNvf8ANYNw+uAuljabC/veMFUzCkfF++WHO3XZ9stXqGmjChYhiIUFy0IpO8AetidsVVCZx0reTEIDiTY1jOMlKiDR6vSRjeCbEf29iRi3dhstmdTGmMu+XcjVTLwysAAzWQ6Sd9Jsbbb4oLMzU2E3Qhl9JAO3QsCPfGh/wwp5fSSdQqW+J5JB2gqBbyN8JdpgpwxOvhPPiI2MjSmsEP8AIPzH89Kv+bbu6bM19Kk/IYy3MVjUaWPifxMQdhIIUHeP7Y1XO5cVUamZhgQb8iMZnnuHVKLgFCQsgQPiHKMYvZRT3v8Acfp/Nbh/TavVSnoNht8vPFs7E0oy8x8TEyPZT9QfLFf4VwepXMaTTQQWLWJBPJTfkb7Yugy/dUj3NtCmENxYdJn649j3U5fhTcny9/zVG0qT+qgvbDhGRZe9zZKFvCKgLTaYAEEdbR1xjWdooHbuyWTUdJYQSJsSNgYwb7YdrlzYputN6bR+IveEoTbSVG03YGQOWKo3EP8Ab9f8Y6DsvBvsty4TJtBIgQdv5gjSsjFLzq7oHXjXZvLEXG32x6Ksb3wujm9QIYRAmRhg1V5TjVGY2IpbvaEUeZFW5AAPl/YYbGZpC+mTMA7H93xeqv8ADZApnMsarXACiB1Jkkn5jGecTodw5RSlWCRqWYkGDYwZ5dLc8Z2GxDOJJDaiY5EfM2ry8Ktv9Q+YrTv4bcXpil3CT3zu9RgTZVGlZmL2jbrfbFp45wdcxT0kww+Fuh/TyxifY3j65XNGtW1kaGWFAJvBAvEC2NL4R/EbL1DTDnQ1RiFWCdPj0pqIEAtY9BPucTtLAYhrEF1lJI1nmZnwH4GtbGFeT8MJURw+wobmOzWZQkBA3mD+yMEeDdkahbVWMC1t58vTFx/nacDxDaZnluT6YF8a7VUcvSFa7qHCNouQSCV9JAsTbbCX9fiXBkSLm0gex7ime6m5ozlqq6TH5TBA5EcsZD26zJbNVKS1q7oCDDsYVjfSAbEDr5xyw92k7Ras2a2UqsEdE1RIlgCCCp5wBgHSzJaqC/jJgmed7zF46xjS7M7OLKvjK3GhFwec8DwPW1qycbigsZE6zfhHhr0irL2H7O0M0lZXJFaloIIPwlwxumx2H+MaNluFogqqYZKrampsBpDEAPA/pJEwdiT7NcF4XlKU1ctTRe8F3Qk6pvuTe+PeM8RWlTLN8tsZGKxS8U93Zg6AxbSYjS4B24ca0MNhkoToOtPstJRTWBFKNA/p0rpH0xAbJ0a5zEEA1qYptzjTqho5nxD/APUYo9TP1apaCQs26wDIx6j1KZ1JUIPz28jhkdnFI/X3vWfrRFKZnKfe30q5VOyeX/lhQAJ0sXUkidZESTERsNtgMU/ifZvMUqD12VBoQsQzgRA2/wAc9sWXsvxoVfC3x877nnv9sT+1XCMvmaYGYarpW+mmzXI/9NQdZ9jijeIfwzpQ4dTJtJvrAkTPOlsRgWlwqNBGsV891qzuSWJJP72wzTsZODXabIpQzL06eoLYhXILrI2eLBuccgQDecBnHix27LiXEBadCJ8KzYIJSaL1M0NIj8wH229cMalH5QB5ee+2IfexPliaMsZ3AECfWLgehtOKZQmg5Qml0EUsqu+imxgtGrSJu0CJA3xtfYjs9UyasvfpVpVIcaVIgwBIMkEER8sZl2a4ZTasqNTFTUZIJPK9iCDy5cpsdsbbS2HiO37u2Ob7dxSu60k2NyIF+BG4Ou/3rR7PSFSr35UzxHNimhL7ffFCz/aCqSVWxn9364M9uswyKoB3BMW5Re3TFPpNAljc3Jwt2fhkfD+IoSTWm45kTaieW47XSNRLDz/XF24JnhWQOt568vKMZ02ZU7C2LL2Gc6X+IDVaAI2E+ZxbHYdJaKwIIqGXS4L0x/FynUajSAUCmr6i5K/EQVACzqiCZgHflGMuq5RpEW6+4H2vj6B4nR72iymlTr9Ec6Qf/dBg9Db1GMPzK6alRO6ajpcjumklNiBJ3ERfmIw52JiR8ItAXTfbflM/KPvk9ooKVZ+NQaBIJnYqR9Le8xg72c489BwqGmiknXUZZjqAQQYFhcxgQjhTLCw6fv8AvhqtVkxYabDSIAi0RjXcbS8MqxINJtuFN0619AZSuqU0kyWGomPKSfsMPV0B0TzP+cfP+V4lUWojNUdlDAkFiQYItc+WLXX/AIga80azE06VBQtOju1Qu66mjadIPOBa98c092K8kjKc2pMDwAjiZ8BethrGoVy9/atM4hmlp03rCCKYJb0Qw49RB9xit9pu1AGU/mcnVQsjKCrCZDGIIBBDDf2O+M0qdu65TN09I05py8T8GqzAdZWB7TF8AUrAiRY7H/PlhzDdgqScz0WItqCIBIPmR56iKG7jI/T/ABXnEMyaju5CqXYsQogXJJgHYeWI4dBEpPUgkT7GcKqi/nhiMdQkAAAUhM3oll8vqE0zB59YvHXf64maKZu1MT1jf5YAhoM88TqOfIHL3OBLbUbg0FaFV9DZjJl6bKtd6eoQGUglZ6EiP3y3xkvaXsZUyya0rCrTXcQdQk7mJEecjGnLU7sKr6NR217MR0b+r/afbbFP/iFULBRVarAuqU1GiepciJv1PkMch2Y662+EpPdJvYX6b+MgVt4xtKkEnUVl2bW4tGI674ertLGPQYXSoib47QGBeskHKkTTtKtV/reCum7H4em/w+W2F1SVRgjEBo1qDYwZEjaxiMcYnHuoASdhFhzPIYHvYVXOSaVkarBZk3Npvt0xYux2ZY5ymq5ZMwTPgblt4pnSI6sCPcjFYbNC95B8sPcJ4lWpVGelUemx5qSLdDG42wDEMlxtYAEkbyB/8walEBec/b719KIDpEgLbYGw94H2xWe2kmgwUExc/vnjuw/FlzFATXetUA8epNOk9LCPckzg++XDSIEczjggDhn+8LpPMadb+YroG1JUmRWUU3Om1sdSdt3Nhi45rslTeoRSYoABPMTvYfLEfLdjNV6lRjE+ECJi2+Nz+uw8TMeBm9BVhQpeaofYjLF6rPHhFveMXx6ErBJjyJH1Fx7YGUshTp0xC+ECbbwL2j8w3EX3HPEHtLxuplaPfUmpVANLQ5+NW20kH4vvjKxClYp8ZN7Cffvzo6lBCb7VlXb7htGhmmSkxJJlliyzsNRZmLHc6o388VxDFptz8/8AGCHaDiAr5irWFMU+8IOgGQDpAYzAuxBbbmcDWcD16Y7nDJWllCXCSYE9fDWNJvOsnWsBwgqOWpuXVY8xv++nPEimQP8AP+DgPQrFb9MElqgx1PLEuIM0u4ggzRvgtakKqd7UNNJksgJYRcEW687+mNiyHFKFUhaFRHaJ3loFiTz+eMEpVReORifPFz7F9paGTDmoGJcSzATpANlA3IuST/xHnjD7VwKnkhScxULACN/fjpTmBe+GrKYAO59xWh9oeFLVpGT4hfVzPl/1jPKvDq9OEekx3gqJH02xcOyfan/yD1StMpSpBY1bszTcgWAABtffFkphSoYQRcg/PGM3iXsFLTieFjtIkactq2QUuCsvocGr1D/psik3Z7e8bnGhcJyC5ekqbqN2jmbkn3xKytZK1JXUyrKCPQjA6pxBhTzFKmNdekpKpMapErHWQfnij+KcxAyEQAbjxiSeRqRlQLUz23zK0co9QhmWw8FQoQSYUhgQd4sDf0nGI5XM6qtQy51X/EbUxItdoEn/AKxaX7c1alGpRrUqdRHWBAKkNyYTNwYMQNuWKa7aSeRYX8gHDT6+HHS9lYNeHbWhwd6dZ1Fj8ul6yMW6l4wOFEGBgnDdU39TNz748pVtYkf9YTmwYF7nb9+kYfSDMGswAgxXtR1AuQP30GBWYkksQb/sYJZfLAjUfiJjfaLf2wzmKRAkX64MghJgUdCgDFDDhavGOfCMMUxrTyVvLD7oALHe539h7YZyvPEkpgZMGgqVBiobgj9RhGs9Th91+WGApOwxcVYV9Ddqc9QSlor2RhZoJAI6gX9/XGL8azP4jCmz1KY+EuSY5WJJt0P/AHh7i3aDMZkRUbw28A2kcxMkek4FDnjH7NwH9KnvGTw2/njFqPicQHDYWpNCmPiPsOeHo6EYTS2PWZ+e/wBh88eNTm+31xpG5pQ3NcCcKzDwmm08/wC/6YYqPpiN/wBxhAoswmGPUgTHriwTuasE70jUOe3lh+kg1SpkHkbEf2PthOXpj1jEuhTvJ2x5agK8tQFWHs92gzOW8NOodBE6CPCCd/OeeNJyHbakctrYHvFsaawXZoBOlZ+EnmcY/wB5fnfYfflOFrXaxJgRYDmD68vXGNi+zWsQZIg6yN+tEZxbiOnA7VuPBuN0ajVQrqSkazIgEySJ8rA47L8fomglcsArk7kCN9W/SDjGmPhISF5ELbkJtiPmqrFQknSCSBNgTvb2GM/+xtqP6jt5AX89uGlMDtOTdPz8vxWpr2nWmczSsalGqzIsxrSdRAP9QBa3kPPGa9rs4hqAUahaiZZFbenJul9gDsBbEbvNUMxkwJP/ABsPoBgTmGDXONPA9nIw68wM8evuSNxJEwaE5iS6MpFh799J1pv0wtKHM4TTTpbEgUzvONRRpVaoqLmqOm454TTcGzCPPEuqDHi2PPEBVOLJMi9XQZF6eDKNm+U4SmZIfUN/O8jYg+RxIyuSES3yx5mspF1B9BiApMxXkrTmiaOdneOVcstTuTAqCL3iJIg/1CSMWU9tGXK06NEFStLQzNG5A1EDyMwTik1W0kIpEJb1I+I+7E+wGFLWExO/7+eM97BtPKC1Jk6/KBPhV/juJkJPp+KsfDO1dXL5dqKTFijT8BDBiIO6mDbzO+IGb45Wq1jX1lKpiChKxAC2vMQNsDah6e+EJI9MSMO0CpYSJVM85184oan1qSBOn2rnBMsedyfXfEbN0x3aRA1ark8gQB9QcdmRcySb/vc4TmtJK7lUULG1xdp6AsSZw6gGR72/NSgU/wAOICwpmD0sbeeHKqyfS89P3GB9DNHWJ+HaBsOkDBJ38MLzIvii0kKnjQnEwqabSrcgjSQeV/3649cHCay+EEbj7f4P09MMq9seibivG9xUbN0+YG+ImCVdZU9f0wOXDCDIo7apFPZYb4lFumI2V5jDp3tfFVC9UUJVXPhNWAYuI8pvz5jnh8iLnYcj15DEZxJnHhXkmlp+v3wtdvfHuOx41460rL/EfQ/cYTX5+n98djsV/dVd6jZrf2wR4H/qLjsdizn+kelGT+miXaP4x6YgJsvv98djsKtf6aaVO1LXDuc/1D6/pjsdi29eFS03bDGZ+I+uOx2AJ1oY18qZH+ifU/ZcDanxH1P3x2Ow03qetMI1NKTfE2ntjsdiHKG5Q/iO/wC+uEnHY7Bk/pFG2FEOXyxIf4X9BjzHYWO3vhQU6++VQq3L0/sMR858A9f7Y7HYMj9QoyP1Cpw/THo2+X2x5jsCoQ3qO3xe4xGOz+v/AMsdjsHTofCip0qMcF8rsn/E47HYl3T3wNS7p74Gnh8J9G+2IKcse47AUaGgp0rq+zeh+2B+Ox2DN6UdnQ0/ldz/AMTh7L7nHY7Er3qHN6czWw9f7YjNjsdiqP01ROlf/9k=",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621574539436-4b7b2b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621574539436-4b7b2b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

const HomePage = () => {
  const { data } = useQuery("products", () => getHome());
  return (
    <div className={"home-page flex w-full flex-col gap-2 py-2"}>
      <MainSearchRow />
      <div className={"carousel-wrapper height-flex-layout-small"}>
      <Carousel slides={dummySlides} />
      </div>
      {data && (
        <>
          <FestivalSection festivals={data.festivals} />
          <TrendingNowSection touristSpots={data.touristSpots} />
          <RestaurantSection restaurants={data.restaurants} />
        </>
      )}
      {
        // error && <ErrorSign error={error.response} />
      }
    </div>
  );
};

export default HomePage;
