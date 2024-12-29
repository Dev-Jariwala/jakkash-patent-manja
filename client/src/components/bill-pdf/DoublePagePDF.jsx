/* eslint-disable react/prop-types */
import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  // Add a new style for bold text within billHead
  boldText: {
    fontWeight: "bold",
  },
  billContainer: {
    // backgroundColor: "yellow",
    width: "90%",
    margin: "0 auto",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0 10px",
  },
  bill: {
    // backgroundColor: "red",
    width: "100%",
    margin: "0 auto",
    // minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 0",
  },
  billHead: {
    width: "100%",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    padding: "5px 0",
    border: "1px solid black",
  },
  address: {
    width: "100%",
    fontSize: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 7px",
    border: "1px solid black",
    borderTop: "none",
  },
  billdetails: {
    width: "100%",
    // backgroundColor: "red",
    fontSize: 8,
    border: "1px solid black",
    borderTop: "none",
  },
  bdRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "3px 0",
  },
  bdCol: {
    // backgroundColor: "yellow",
    width: "50%",
  },
  table: {
    width: "100%",
    fontSize: 9,
    // marginBottom: 10,
    border: "1px solid black",
    borderTop: "none",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 8,
    padding: "2px 10px",
    borderRight: "1px solid #ccc",
  },
  notes: {
    width: "100%",
    // backgroundColor: "green",
    fontSize: 8,
    border: "1px solid black",
    padding: "3px 10px",
  },
});
const DoublePagePDF = ({ bill }) => {
  const {
    bill_no,
    name,
    order_date,
    mobile,
    address,
    delivery_date,
    products,
    total_firki,
    sub_total,
    discount,
    advance,
    total_due,
  } = bill;
  return (
    <>
      <Page size="A5">
        <View style={styles.billContainer}>
          <View style={styles.bill}>
            {/* Jakkash */}
            <View style={styles.billHead}>
              <Text>JAKKASH PATENT MANJA</Text>
            </View>
            {/* Address */}
            <View style={styles.address}>
              <Text>
                40, GANESH KRUPA SOCIETY, NEAR JOGANI NAGAR, OPP GAIL TOWER,
                TADWADI, RANDER ROAD, SURAT.
              </Text>
            </View>
            {/* bill Details */}
            <View style={styles.billdetails}>
              <View style={{ ...styles.bdRow, padding: "3px 10px" }}>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    // backgroundColor: "yellowgreen",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> NAME:</Text>
                    <Text style={styles.bdCol}>{name.toUpperCase()}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> ADDRESS:</Text>
                    <Text style={styles.bdCol}>{address.toUpperCase()}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> MOBILE:</Text>
                    <Text style={styles.bdCol}>{mobile}</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    // backgroundColor: "yellowgreen",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> bill_no:</Text>
                    <Text style={styles.bdCol}>{bill_no}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> DATE:</Text>
                    <Text style={styles.bdCol}>
                      {order_date?.slice(0, 10).split("-").reverse().join("-")}
                    </Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> DELIVERY DATE:</Text>
                    <Text style={styles.bdCol}>
                      {delivery_date.slice(0, 10).split("-").reverse().join("-")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Table */}
            {
              <View style={styles.table}>
                {/* Table Header */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      padding: "7px 10px",
                    }}
                  >
                    <Text>DESCRIPTION</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>QTY</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>RATE</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>TOTAL</Text>
                  </View>
                  {/* Add more headers as needed */}
                </View>

                {/* Table Rows */}
                {products?.slice(0, 20)?.map((product, index) => (
                  <>
                    <View
                      key={index}
                      style={{
                        ...styles.tableRow,
                        borderBottom: "1px solid #ccc",
                        // padding: "3px 0",
                      }}
                    >
                      <View
                        style={{
                          ...styles.tableCell,
                          flex: 4,
                          textAlign: "left",
                          //   paddingLeft: "5px",
                        }}
                      >
                        <Text>{product?.product_name}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.tableCell,
                        }}
                      >
                        <Text>{product?.quantity}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>{product?.price}/-</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>{product?.price * product?.quantity}/-</Text>
                      </View>
                      {/* Add more cells for additional data */}
                    </View>
                  </>
                ))}
                <>
                  <View
                    style={{
                      ...styles.tableRow,
                      borderBottom: "1px solid #ccc",
                      // padding: "3px 0",
                    }}
                  >
                    <View
                      style={{
                        ...styles.tableCell,
                        flex: 4,
                        textAlign: "left",
                        //   paddingLeft: "5px",
                      }}
                    >
                      <Text></Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableCell,
                      }}
                    >
                      <Text></Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text></Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Continue..</Text>
                    </View>
                    {/* Add more cells for additional data */}
                  </View>
                </>
              </View>
            }
          </View>
          {/* Notes */}
          <View style={styles.notes}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 9,
                marginBottom: 5,
              }}
            >
              " Important Notes "
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * We are not responsible for breakage of firki.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Delivery of firki will be taken according to own dates.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * We will not be responsible for loss of Firki after delivery date
              of Firki is late.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Check and calculate your firkis. Any dispute will not be
              considered later.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Bring the bobbin after proper inspection. We will not be
              responsible for bad or duplicate thread.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * If Firki is lost by us before the date of delivery, give details
              of Firki in writing and take signature and take delivery of Firki
              by 12 noon on 13th January.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * If firki or bobbin is taken from us then payment will be made
              first otherwise it will not be delivered.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * No goods will be issued without a receipt.
            </Text>
          </View>
        </View>
      </Page>
      <Page size="A5">
        <View style={styles.billContainer}>
          <View style={styles.bill}>
            {/* Jakkash */}
            <View style={styles.billHead}>
              <Text>JAKKASH PATENT MANJA</Text>
            </View>
            {/* Address */}
            <View style={styles.address}>
              <Text>
                40, GANESH KRUPA SOCIETY, NEAR JOGANI NAGAR, OPP GAIL TOWER,
                TADWADI, RANDER ROAD, SURAT.
              </Text>
            </View>
            {/* bill Details */}
            <View style={styles.billdetails}>
              <View style={{ ...styles.bdRow, padding: "3px 10px" }}>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    // backgroundColor: "yellowgreen",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> NAME:</Text>
                    <Text style={styles.bdCol}>{name.toUpperCase()}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> ADDRESS:</Text>
                    <Text style={styles.bdCol}>{address.toUpperCase()}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> MOBILE:</Text>
                    <Text style={styles.bdCol}>{mobile}</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    // backgroundColor: "yellowgreen",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> BILLNO:</Text>
                    <Text style={styles.bdCol}>{bill_no}</Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> DATE:</Text>
                    <Text style={styles.bdCol}>
                      {order_date?.slice(0, 10).split("-").reverse().join("-")}
                    </Text>
                  </View>
                  <View style={styles.bdRow}>
                    <Text style={styles.bdCol}> DELIVERY DATE:</Text>
                    <Text style={styles.bdCol}>
                      {delivery_date?.slice(0, 10)?.split("-")?.reverse()?.join("-")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Table */}
            {
              <View style={styles.table}>
                {/* Table Header */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      padding: "7px 10px",
                    }}
                  >
                    <Text>DESCRIPTION</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>QTY</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>RATE</Text>
                  </View>
                  <View style={{ ...styles.tableCell, padding: "7px 10px" }}>
                    <Text>TOTAL</Text>
                  </View>
                  {/* Add more headers as needed */}
                </View>

                {/* Table Rows */}
                {products?.slice(20, products?.length)?.map((product, index) => (
                  <View
                    key={index}
                    style={{
                      ...styles.tableRow,
                      borderBottom: "1px solid #ccc",
                      // padding: "3px 0",
                    }}
                  >
                    <View
                      style={{
                        ...styles.tableCell,
                        flex: 4,
                        textAlign: "left",
                        //   paddingLeft: "5px",
                      }}
                    >
                      <Text>{product?.product_name}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableCell,
                      }}
                    >
                      <Text>{product?.quantity}</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>{product?.price}/-</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>{product?.price * product?.quantity}/-</Text>
                    </View>
                    {/* Add more cells for additional data */}
                  </View>
                ))}
                {/* Total */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                    //   padding: "1px 0",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    <Text style={{ marginRight: "20px" }}>Total Firki</Text>
                  </View>
                  <View
                    style={{
                      ...styles.tableCell,
                      fontSize: 10,
                    }}
                  >
                    <Text>{total_firki}</Text>
                  </View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>Total</Text>
                  </View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>{sub_total}/-</Text>
                  </View>
                  {/* Add more cells for additional data */}
                </View>
                {/* Discount */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                    //   padding: "1px 0",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  ></View>
                  <View
                    style={{
                      ...styles.tableCell,
                      fontSize: 10,
                    }}
                  ></View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>Discount</Text>
                  </View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>{discount}/-</Text>
                  </View>
                  {/* Add more cells for additional data */}
                </View>
                {/* Advance */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                    //   padding: "1px 0",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  ></View>
                  <View
                    style={{
                      ...styles.tableCell,
                      fontSize: 10,
                    }}
                  ></View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>Advance</Text>
                  </View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>{advance}/-</Text>
                  </View>
                  {/* Add more cells for additional data */}
                </View>
                {/* Total Due */}
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #ccc",
                    //   padding: "1px 0",
                  }}
                >
                  <View
                    style={{
                      ...styles.tableCell,
                      flex: 4,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  ></View>
                  <View
                    style={{
                      ...styles.tableCell,
                      fontSize: 10,
                    }}
                  ></View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>Due</Text>
                  </View>
                  <View style={{ ...styles.tableCell, fontSize: 10 }}>
                    <Text>{total_due}/-</Text>
                  </View>
                  {/* Add more cells for additional data */}
                </View>
              </View>
            }
          </View>
          {/* Notes */}
          <View style={styles.notes}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 9,
                marginBottom: 5,
              }}
            >
              " Important Notes "
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * We are not responsible for breakage of firki.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Delivery of firki will be taken according to own dates.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * We will not be responsible for loss of Firki after delivery date
              of Firki is late.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Check and calculate your firkis. Any dispute will not be
              considered later.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * Bring the bobbin after proper inspection. We will not be
              responsible for bad or duplicate thread.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * If Firki is lost by us before the date of delivery, give details
              of Firki in writing and take signature and take delivery of Firki
              by 12 noon on 13th January.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * If firki or bobbin is taken from us then payment will be made
              first otherwise it will not be delivered.
            </Text>
            <Text style={{ marginBottom: 2 }}>
              * No goods will be issued without a receipt.
            </Text>
          </View>
        </View>
      </Page>
    </>
  );
};

export default DoublePagePDF;
