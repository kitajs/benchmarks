<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Apr 20 2026 02:29:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 75083.2    | 12.81        | 13.39         |
| fastify                  | 4.29.1   | ✓      | 72828.8    | 13.24        | 13.06         |
| polka                    | 0.5.2    | ✓      | 72711.6    | 13.26        | 12.97         |
| connect                  | 3.7.0    | ✗      | 72096.0    | 13.40        | 12.86         |
| kita                     | 1.1.36   | ✓      | 71504.0    | 13.50        | 12.82         |
| rayo                     | 1.4.6    | ✓      | 70548.4    | 13.67        | 12.58         |
| connect-router           | 1.3.8    | ✓      | 67738.8    | 14.25        | 12.08         |
| polkadot                 | 1.0.0    | ✗      | 63071.2    | 15.36        | 11.25         |
| server-base-router       | 7.1.32   | ✓      | 62697.6    | 15.46        | 11.18         |
| server-base              | 7.1.32   | ✗      | 62367.2    | 15.54        | 11.12         |
| 0http                    | 3.5.3    | ✓      | 61185.6    | 15.86        | 10.91         |
| h3                       | 1.15.11  | ✗      | 58876.8    | 16.49        | 10.50         |
| h3-router                | 1.15.11  | ✓      | 56956.0    | 17.06        | 10.16         |
| restana                  | 4.9.9    | ✓      | 56020.0    | 17.36        | 9.99          |
| koa                      | 2.16.4   | ✗      | 55972.8    | 17.38        | 9.98          |
| hono                     | 4.12.14  | ✓      | 55716.0    | 17.44        | 9.14          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 52833.6    | 18.44        | 9.42          |
| restify                  | 11.1.0   | ✓      | 52232.0    | 18.64        | 9.41          |
| koa-router               | 12.0.1   | ✓      | 49372.0    | 19.76        | 8.81          |
| take-five                | 2.0.0    | ✓      | 49309.6    | 19.78        | 17.73         |
| hapi                     | 21.4.8   | ✓      | 46188.8    | 21.14        | 8.24          |
| express                  | 4.22.1   | ✓      | 13870.2    | 71.55        | 2.47          |
| express-with-middlewares | 4.22.1   | ✓      | 13227.2    | 75.04        | 4.92          |
| fastify-big-json         | 4.29.1   | ✓      | 13144.4    | 75.53        | 151.24        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
