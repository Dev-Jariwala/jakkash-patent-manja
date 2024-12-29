import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  billContainer: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    borderBottom: "1px solid black",
    padding: "7px 0",
  },
  tBody: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tR: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 9,
    borderBottom: "1px solid #ccc",
    padding: "7px 0",
  },
  tH: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  tD: {
    flex: 1,
    textAlign: "center",
  },
});

const ExportPDF = ({ exportData = [], headers = [], title }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.billContainer}>
          {/* Title */}
          <Text
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            {title}
          </Text>

          {/* Table */}
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tHead}>
              {headers.map((head) => (
                <Text key={head.key} style={styles.tH}>
                  {head.label}
                </Text>
              ))}
            </View>

            {/* Table Body */}
            <View style={styles.tBody}>
              {exportData.map((data, index) => (
                <View style={styles.tR} key={index}>
                  {headers.map((head) => (
                    <Text key={`${index}-${head.key}`} style={styles.tD}>
                      {data[head.key] ?? "-"}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ExportPDF;
