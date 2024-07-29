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
* __Node:__ `v20.15.1`
* __Run:__ Mon Jul 29 2024 01:21:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.1 | ✗      | 47086.4    | 20.73        | 8.40          |
| connect                  | 3.7.0    | ✗      | 46037.6    | 21.21        | 8.21          |
| fastify                  | 4.28.1   | ✓      | 45796.8    | 21.32        | 8.21          |
| polka                    | 0.5.2    | ✓      | 45577.6    | 21.44        | 8.13          |
| kita                     | 1.1.36   | ✓      | 45254.4    | 21.60        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 44330.4    | 22.06        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 44258.4    | 22.10        | 7.89          |
| polkadot                 | 1.0.0    | ✗      | 43610.4    | 22.43        | 7.78          |
| server-base              | 7.1.32   | ✗      | 42955.2    | 22.78        | 7.66          |
| server-base-router       | 7.1.32   | ✓      | 42711.2    | 22.91        | 7.62          |
| h3                       | 1.12.0   | ✗      | 42542.4    | 23.01        | 7.59          |
| connect-router           | 1.3.8    | ✓      | 41335.2    | 23.69        | 7.37          |
| h3-router                | 1.12.0   | ✓      | 40656.0    | 24.09        | 7.25          |
| hono                     | 4.5.2    | ✓      | 38098.2    | 25.74        | 6.79          |
| restana                  | 4.9.9    | ✓      | 36832.6    | 26.64        | 6.57          |
| koa                      | 2.15.3   | ✗      | 35099.8    | 27.99        | 6.26          |
| take-five                | 2.0.0    | ✓      | 34326.0    | 28.63        | 12.34         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34147.4    | 28.79        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 33016.4    | 29.77        | 5.89          |
| restify                  | 11.1.0   | ✓      | 33004.2    | 29.80        | 5.95          |
| hapi                     | 21.3.10  | ✓      | 30669.6    | 32.11        | 5.47          |
| fastify-big-json         | 4.28.1   | ✓      | 11576.2    | 85.81        | 133.19        |
| express                  | 4.19.2   | ✓      | 10516.8    | 94.51        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 9866.2     | 100.76       | 3.67          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
